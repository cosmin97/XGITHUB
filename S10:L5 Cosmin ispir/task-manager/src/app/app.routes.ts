import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'completed', component: CompletedTodosComponent },
  { path: 'users', component: UserListComponent }
];
