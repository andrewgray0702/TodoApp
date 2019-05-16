import { Component, OnInit } from '@angular/core';
import { UsernameServiceService } from '../username-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todo: Object = { task: '', username: '' };
  todos: Object[] = [];
  constructor(private todoService: UsernameServiceService) {
    this.todos = this.todoService.AllTodos;
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = { task: '', username: '' };
    this.todos = this.todoService.AllTodos;
  }

  ngOnInit() {
  }


}
