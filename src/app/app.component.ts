import { Component } from '@angular/core';

@Component({
   selector: "my-app",
   template: `<h1>{{titel}}</h1>
              <my-customers></my-customer>`,
})


export class AppComponent {
  titel = 'Customer Info';
}