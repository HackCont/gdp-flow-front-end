import { inject, Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';
import { DecodedTokenPropsThatMatter, UserService } from '../user/user.service';
import { COOKIE_KEY_TOKEN } from '../../global/constants/key-cookies';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private cookieService = inject(CookieService);
  private userService = inject(UserService);
  
  public saveToken = (token: string) => {
    this.cookieService.set(COOKIE_KEY_TOKEN, token);

    // Decodifica o token.
    this.decodeToken(token);
  }

  private decodeToken = (token: string) => {
    const decoded: DecodedTokenPropsThatMatter = jwtDecode(token);
  
    // Pega somente as informações mais relevantes para salvar as informações do usuário.
    const {sub, name, given_name, family_name, email} = decoded;
    const userData: DecodedTokenPropsThatMatter = {sub, name, given_name, family_name, email};

    this.userService.saveUser(userData);
  }
}
