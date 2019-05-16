import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { UsernamesComponent } from './usernames/usernames.component';

const routes: Routes = [
  {path: 'todo', component: TodosComponent},
  {path: 'user/:username', component: UsernamesComponent},
  {path: '**', redirectTo: 'todo'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
