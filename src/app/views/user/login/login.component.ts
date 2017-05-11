import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {UserService} from '../../../services/user.service';


@Component({
  selector: 'app-user-login',
  moduleId: module.id,
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usersService: UserService) {
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/products';
  }

  login() {
    this.loading = true;
    this.usersService.signIn(this.model.username, this.model.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.error(error);
          this.loading = false;
        });
  }
}
