import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  providers :[
    // Category
  ]
})
export class AppModule { }
