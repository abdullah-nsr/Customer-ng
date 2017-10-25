import { Component, Input } from '@angular/core'
import { Customer } from './customer'
import { NgModel } from '@angular/forms';

@Component({
    selector: 'customer-info',
    template: `<div *ngIf="customer">
    <h2>{{customer.PlistaProduct}} details!</h2>
     <div><label>a: </label>{{customer.a}}</div>
       <div>
        <label>PlistaProduct: </label>
        <input [(ngModel)]="customer.PlistaProduct" placeholder="PlistaProduct"/>
     </div>
 </div>
 `

})

export class CustomerInfoComponent {
    @Input()
     customer:Customer;
}
