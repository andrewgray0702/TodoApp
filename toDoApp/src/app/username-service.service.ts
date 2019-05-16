import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameServiceService {
  private todos: Array<Object> = [];
  private nextID: number = 0;
  constructor() { }
  addTodo(todo: Object){
    todo["id"] = this.nextID;
    this.nextID++;
    this.todos.push(todo)
  }
  deleteTodo(id: number){
    let index = this.todos.findIndex(todo=> todo['id'] === id);
    this.todos.splice(index, 1);
  }
  getByUsername(username){
    return this.todos.filter(todo => todo['username'] === username)
  }
  get AllTodos(){
    return this.todos;
  }
}
