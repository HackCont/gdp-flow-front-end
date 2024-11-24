import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private cookieService = inject(CookieService);

  public getItemFromCookies = (key: string) => {
    const cookieItem = this.cookieService.get(key);
    return cookieItem;
  }
}
