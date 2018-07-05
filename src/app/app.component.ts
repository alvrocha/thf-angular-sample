import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titleToolbar = 'THF-CRUD';

  menus = [
    { label: 'Customers', link: './customers' },
  ];
}
