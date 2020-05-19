import { Component } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { TodoList } from 'src/app/models/todo-list';
import { TodoListService } from '../services/todo-list.service';

@Component({
    selector: "my-modal",
    templateUrl: "app.modal.html",
    styleUrls: ['./home.component.css'],
    providers:[TodoListService]
})

export class ModalComponent{
    public frameworks: Array<string>;
    nombre="";
    especialidad="";
    consultorio="";
    telefono;

    public constructor(private params:ModalDialogParams, public todolistservice: TodoListService){
        this.frameworks=[
            "hola",
            "que",
            "tal",
            "como",
            "estas"
        ];
    }

    save(){
        let data ={
            _id:"",
            nombre: this.nombre,
            especialidad: this.especialidad,
            consultorio: this.consultorio,
            numerotelefono: this.telefono
        }
        console.log(data);

        this.todolistservice.postTodoList(data)
        .subscribe(res => {
          this.close("");
         });
    }

    

    close(response:string){
        this.params.closeCallback(response);
    }
}
