import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { HTTP_POST_LOGIN } from './auth';

const API_URL = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  public authLogin = (email: string, password: string): Observable<HTTP_POST_LOGIN> => {
    return this.http.post<HTTP_POST_LOGIN>(`${API_URL}/auth/login`, {
      email,
      password
    })
  }

  public postNewUser = (user: {firstName: string, lastName: string, email: string, password: string}) => {
    const {firstName, lastName, email, password} = user;

    return this.http.post(`${API_URL}/auth/register`, {
      firstName,
      lastName,
      email,
      password
    })
  }
}
