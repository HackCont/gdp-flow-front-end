import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '@env/environment';

const API_URL = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  // public authLogin = (email: string, password: string) => {
  //   return this.http.post(`${API_URL}/api/users`, {


      
  //   })
  // }

  public postNewUser = (user: {firstName: string, lastName: string, email: string, password: string}) => {
    const {firstName, lastName, email, password} = user;

    return this.http.post(`${API_URL}/api/users`, {
      firstName,
      lastName,
      email,
      password
    })
  }
}
