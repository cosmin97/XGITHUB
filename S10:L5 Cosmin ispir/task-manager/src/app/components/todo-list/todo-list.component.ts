import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  users: any[] = [];

  constructor(private todoService: TodoService, private userService: UserService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  getUser(userId: number) {
    return this.users.find(user => user.id === userId);
  }

  updateTodoStatus(todo: any) {
    todo.completed = !todo.completed;
    this.todoService.updateTodoStatus(todo.id, todo.completed).subscribe();
  }
}
