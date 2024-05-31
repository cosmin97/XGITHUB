import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosUrl = 'assets/todos.json'; // Percorso al file todos.json

  private todos: any[] = []; // Per mantenere una copia locale dei todo

  constructor(private http: HttpClient) {
    this.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

  getTodos(): Observable<any> {
    return this.http.get<any>(this.todosUrl);
  }

  updateTodoStatus(id: number, completed: boolean): Observable<any> {
    // Trova il todo locale e aggiorna il suo stato
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = completed;
    }
    // Restituisci un Observable simulato
    return of(todo);
  }
}
