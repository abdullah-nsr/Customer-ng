import { Component } from '@angular/core'



@Component({
    selector: 'my-app',
    template: `<h1>{{titel}}</h1>
                <a routerLink="/customers">Customers</a>
                <router-outlet></router-outlet>
                `

})
export class AppComponent {

    titel = 'Customer';

};