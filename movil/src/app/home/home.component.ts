import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { NgForm } from '@angular/forms';
import { TodoList } from 'src/app/models/todo-list';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ModalDialogService } from 'nativescript-angular/directives/dialogs';
import { ModalComponent } from './app.modal';
import { confirm } from "tns-core-modules/ui/dialogs";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[TodoListService]
})
export class HomeComponent implements OnInit {
  title = 'movil';

  constructor(public todolistservice: TodoListService, private modal: ModalDialogService, private vcRef: ViewContainerRef
    ) { }

  ngOnInit() {
    this.getTask();
    console.log("aqui si funciona");
  }

  getTask(){
    this.todolistservice.getTodoList()
    .subscribe(res =>{
      this.todolistservice.datas = res as TodoList[];
      console.log(res);
    })
  }

   newTodo() {
    dialogs.prompt({
        title: "Nuevo Doctor",
        message: "Ingrese el titulo del nuevo todo",
        okButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        inputType: dialogs.inputType.text
    }).then(r => {
        if (r.result && r.text != "") {
            //this.todoList.push(new Todo(r.text));
        }
    });
}

eliminar(id){
  let options = {
    title: "Eliminar",
    message: "Esta seguro que desea eliminar el elemento seleccionado?",
    okButtonText: "Si",
    cancelButtonText: "No"
};

confirm(options).then((result: boolean) => {
    
    if(result==true){
      console.log(result,id);
      //return this.http.delete(this.URL_API + `/${_id}`);
      this.todolistservice.deleteTodoList(id).subscribe(res =>{
        this.getTask();
      });
    }else{
      
    }
});

}

public showModal(){
  let option={
    context:{},
    fullscreen: true,
    viewContainerRef: this.vcRef
  };
  this.modal.showModal(ModalComponent, option).then(response =>{
    console.log(response);
  })
}


}
