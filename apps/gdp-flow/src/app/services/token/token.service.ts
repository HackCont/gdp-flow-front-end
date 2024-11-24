import { inject, Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private cookieService = inject(CookieService);
  
  public saveToken = (token: string) => {
    this.cookieService.set(TOKEN_KEY, token);
  }
  
  private decodeToken = (token: string) => {
    const decoded = jwtDecode(token);
    console.log('decoded: ', decoded);
  }
}
