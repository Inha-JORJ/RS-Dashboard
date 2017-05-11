import {Injectable} from '@angular/core';

import {User} from '../domain/user.domain';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import {Product} from '../domain/product.domain';

@Injectable()
export class ProductService {
  constructor(private http: Http) {
  }

  public get() {
    return this.http.get(environment.apiUrl + '/products')
      .map((response: Response): Array<Product> => {
        if (response.json()['status'] === 'ok') {
          return response.json()['result'];
        } else {
          return [];
        }
      });
  }
}
