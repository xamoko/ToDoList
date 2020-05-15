import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoList } from '../models/todo-list';


@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  selectedToDoList: TodoList;
  datas: TodoList[];
  readonly URL_API = 'http://localhost:3000/api/todo-list';

  constructor(private http:HttpClient ) {
    this.selectedToDoList = new TodoList;
   }

  getTodoList(){
    return this.http.get(this.URL_API);
  }

  postTodoList(data: TodoList){
    return this.http.post(this.URL_API,data);
  }

  putTodoList(data:TodoList){
    return this.http.put(this.URL_API + `/${data._id}`,data);
  }

  deleteTodoList(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
