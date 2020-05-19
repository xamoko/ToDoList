import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { ModalComponent } from './home/app.modal';

import { NativeScriptFormsModule } from "nativescript-angular/forms";


import { FormsModule } from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NativeScriptFormsModule
  ],
  providers: [ModalDialogService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [ModalComponent],
})
export class AppModule { }
