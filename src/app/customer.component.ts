import { Component, Input } from '@angular/core'
import { Customer } from './customer'


@Component({
    selector: 'customer-detail',
    template: `<div *ngIf="selectedCustomer">
    <h2>{{selectedCustomer.PlistaProduct}} details!</h2>
     <div><label>a: </label>{{selectedCustomer.a}}</div>
       <div>
        <label>PlistaProduct: </label>
        <input [(ngModel)]="selectedCustomer.PlistaProduct" placeholder="PlistaProduct"/>
     </div>
 </div>`

})

export class CustomerComponent {
    @Input()
     customer:Customer;
}
