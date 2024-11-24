import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HTTP_GET_USER_ID } from './user';
import { Profile } from '../../pages/profile/profile';

export type DecodedTokenPropsThatMatter = {sub: string, name: string, given_name: string, family_name: string, email: string}

const USER_KEY = 'user';
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private cookieService = inject(CookieService);
  private http = inject(HttpClient);
  
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
    this.userData = userData;
  }

  public getUser = (): Observable<HTTP_GET_USER_ID> => {
    return this.http.get<HTTP_GET_USER_ID>(`${API_URL}/users/${this.userData?.sub}`);
  }

  public putUser = (profile: Profile) => {
    return this.http.put<HTTP_GET_USER_ID>(`${API_URL}/users/${this.userData?.sub}`, {
      ...profile,
      skills: profile.skills.join(',')
    });
  }
}
