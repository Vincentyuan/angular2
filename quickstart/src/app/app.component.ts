import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <button (click) = "loadTemplate()"> load template </button>
  `,
})
export class AppComponent  { name = 'Angular';

  loadTemplate(){
    alert("hello");
  }
 }
