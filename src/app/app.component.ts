import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from './domain/user.domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hello World';
  user: User = {
    displayName: 'Ozz',
    role: 'admin'
  };
  menu = [
    {
      name: 'Dashboard',
      menu: [
        {name: 'Trending', path: '/orders'},
        {name: 'Revenue', path: '/orders'}
      ]
    },
    {
      name: 'Menu Managment',
      menu: [
        {name: 'Categories', path: '/categories'},
        {name: 'Dishes', path: '/products'},
      ]
    }
  ];

  ngOnInit(): void {
  }
}
