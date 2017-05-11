import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();

  ngOnInit() {
    /*this.userservice.login(this.user.name, this.user.password);*/
  }

  constructor(private userservice: UserService, private router: Router) {
  }
}
