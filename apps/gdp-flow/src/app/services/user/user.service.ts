import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export type DecodedTokenPropsThatMatter = {name: string, given_name: string, family_name: string, email: string}

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private cookieService = inject(CookieService);
  
  public getUserFromCookies = (): DecodedTokenPropsThatMatter | null => {
    const userData = this.cookieService.get(USER_KEY);

    // Se não tiver usarData nos cookies, quer dizer que o usuário ainda não está logado. Logo userData = null.
    if (!userData) {
      return null
    };

    return JSON.parse(userData) as DecodedTokenPropsThatMatter;
  }
  
  public userData: DecodedTokenPropsThatMatter | null = this.getUserFromCookies(); // Informações do usuário logado.

  public saveUser = (userData: DecodedTokenPropsThatMatter) => {
    this.cookieService.set(USER_KEY, JSON.stringify(userData));
  }
}
