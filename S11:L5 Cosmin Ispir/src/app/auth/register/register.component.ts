import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { iUsers } from '../../interfaces/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerData: Partial<iUsers> = {};
  registerError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.registerData).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['/auth/login']);
      },
      error => {
        console.error('Registration failed', error);
        this.registerError = 'Registration failed. Please try again.';
      }
    );
  }
}
