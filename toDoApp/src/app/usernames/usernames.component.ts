import { Component, OnInit } from '@angular/core';
import { UsernameServiceService } from '../username-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usernames',
  templateUrl: './usernames.component.html',
  styleUrls: ['./usernames.component.scss']
})
export class UsernamesComponent implements OnInit {
  task: string = '';
  todos: Object[] = [];
  username: string;
  constructor(private todoService: UsernameServiceService, private actr: ActivatedRoute) { 
    this.username = this.actr.snapshot.params.username;
    this.todos = this.todoService.getByUsername(this.username);
  }
  addTodo(){
    let todo = {
      task: this.task,
      username: this.username
    }
    this.todoService.addTodo(todo);
    this.task = '';
    this.todos = this.todoService.getByUsername(this.username);
  }
  deleteTodo(id){
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getByUsername(this.username);
  }
  ngOnInit() {
  }

}
