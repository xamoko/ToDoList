import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { NgForm } from '@angular/forms';
import { TodoList } from 'src/app/models/todo-list';
declare var M: any;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers:[TodoListService]
})
export class TodoListComponent implements OnInit {
  

  constructor(public todolistservice: TodoListService) { }
  

  ngOnInit(): void {
    this.getTask();
  }

  addTask(form:NgForm){
    if(form.value._id){
      this.todolistservice.putTodoList(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        this.getTask();
        M.toast({html:'Registro Actualizado'});
      })
    }else{
      this.todolistservice.postTodoList(form.value)
    .subscribe(res => {
      this.resetForm(form);
      this.getTask();
      M.toast({html:'Guardado Satisfactoriamente'});
    })
    }
  }

  getTask(){
    this.todolistservice.getTodoList()
    .subscribe(res =>{
      this.todolistservice.datas = res as TodoList[];
      console.log(res);
    })
  }

  editTask(task: TodoList){
    this.todolistservice.selectedToDoList = task;
  }

  deleteTask(_id:string){
    
    if(confirm("Estas seguro?")){
      this.todolistservice.deleteTodoList(_id)
    .subscribe(res =>{
      this.getTask();
      M.toast({html:'Registro Eliminado'});
    })
    }
    
  }

  resetForm(form?: NgForm){
    
    if(form){
      form.reset();
      this.todolistservice.selectedToDoList = new TodoList;
    }
  }

}
