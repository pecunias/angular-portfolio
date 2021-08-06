import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) { }

  registerUser(username: string): Observable<Object> {
    return this.http.post('http://localhost:3000/api/register', {
      username
    });
  }
}