import {Injectable} from '@angular/core';

import {User} from '../domain/user.domain';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  public signIn(username: string, password: string) {
    return this.http.post(environment.apiUrl + '/users', {name: username, password: password})
      .map((response: Response): User => {
        if (response.json()['status'] === 'ok') {
          const token = response.headers.get('Authorization');
          console.log(response.headers);
          localStorage.setItem('token', token);

          return response.json()['result'];
        }
        throw new Error('Not authorized');
      });
  }
}
