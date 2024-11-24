import { inject, Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';
import { DecodedTokenPropsThatMatter, UserService } from '../user/user.service';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private cookieService = inject(CookieService);
  private userService = inject(UserService);
  
  public saveToken = (token: string) => {
    this.cookieService.set(TOKEN_KEY, token);

    // Decodifica o token.
    this.decodeToken(token);
  }

  private decodeToken = (token: string) => {
    const decoded: DecodedTokenPropsThatMatter = jwtDecode(token);
  
    // Pega somente as informações mais relevantes para salvar as informações do usuário.
    const {name, given_name, family_name, email} = decoded;
    const userData: DecodedTokenPropsThatMatter = {name, given_name, family_name, email};

    this.userService.saveUser(userData);
  }
}
