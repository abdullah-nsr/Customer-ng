//our root app component
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerInfoComponent } from './customer-info.component'



@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CustomerInfoComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}

