import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, map, tap, of } from 'rxjs';
import { iUsers } from '../interfaces/users';
import { iLoginData } from '../interfaces/auth';

type AccessData = {
  accessToken: string,
  user: iUsers
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  userSubj = new BehaviorSubject<iUsers | null>(null)
  loggedIn: boolean = false

  user$ = this.userSubj.asObservable()
  isLogged$ = this.user$.pipe(
    map(user => !!user),
    tap(user => this.loggedIn = user)
  )

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser()
  }

  private usersUrl = 'assets/db.json';  // Path to your JSON file
  private registerUrl = 'assets/db.json';  // Path to your JSON file (assuming it's the same for simplicity)
  private loginUrl = 'assets/db.json';  // Path to your JSON file

  register(newUser: Partial<iUsers>): Observable<AccessData> {
    // Fetch existing users
    return this.http.get<{ users: iUsers[] }>(this.usersUrl).pipe(
      map(response => {
        // Check if the user already exists
        const userExists = response.users.some(user => user.email === newUser.email);
        if (userExists) {
          throw new Error('Email already exists');
        }
        // Simulate user registration by adding the new user to the array
        const newUserId = Math.max(...response.users.map(user => user.id)) + 1;
        const user = { ...newUser, id: newUserId } as iUsers;
        response.users.push(user);

        // Simulate saving to db.json (for real implementation, this should be a POST request)
        localStorage.setItem('users', JSON.stringify(response.users));

        const accessData: AccessData = {
          accessToken: 'fake-jwt-token', // Replace with actual JWT if available
          user: user
        };
        return accessData;
      }),
      map(accessData => {
        // Automatically login the user after registration
        this.userSubj.next(accessData.user);
        localStorage.setItem('accessData', JSON.stringify(accessData));
        this.autoLogout(accessData.accessToken);
        return accessData;
      })
    );
  }

  login(loginData: iLoginData): Observable<boolean> {
    return this.http.get<{ users: iUsers[] }>(this.usersUrl).pipe(
      map(response => {
        const user = response.users.find(u => u.email === loginData.email && u.password === loginData.password);
        if (user) {
          this.userSubj.next(user);
          const accessData: AccessData = {
            accessToken: 'fake-jwt-token', // Replace with actual JWT if available
            user: user
          };
          localStorage.setItem('accessData', JSON.stringify(accessData));
          this.autoLogout(accessData.accessToken);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    this.userSubj.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
  }

  accessToken(): string {
    const userJson = localStorage.getItem('accessData');
    if (!userJson) return '';
    const accessData: AccessData = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return '';
    return accessData.accessToken;
  }

  autoLogout(jwt: string) {
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime();
    setTimeout(() => {
      this.logout();
    }, expMs);
  }

  restoreUser() {
    const userJson = localStorage.getItem('accessData');
    if (!userJson) return;
    const accessData: AccessData = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return;
    this.userSubj.next(accessData.user);
    this.autoLogout(accessData.accessToken);
  }

  errors(err: any) {
    switch (err.error) {
      case "Email and Password are required":
        return new Error('Email e password obbligatorie');
      case "Email already exists":
        return new Error('Utente esistente');
      case 'Email format is invalid':
        return new Error('Email scritta male');
      case 'Cannot find user':
        return new Error('utente inesistente');
      default:
        return new Error('Errore');
    }
  }
}
