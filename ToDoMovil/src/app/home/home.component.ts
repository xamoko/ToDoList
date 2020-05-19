import { Component, OnInit } from "@angular/core";
import { ServiceService } from '../services/service.service';
import { NgForm } from '@angular/forms';
import { TodoList } from '../models/todo-list';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
    providers:[ServiceService]
})
export class HomeComponent implements OnInit {

    constructor(public todolistservice: ServiceService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.getTask();
    }

    getTask(){
        this.todolistservice.getTodoList()
        .subscribe(res =>{
          this.todolistservice.datas = res as TodoList[];
          console.log(res);
        })
      }

    onTap(){
        console.log("boton");
    }
}
