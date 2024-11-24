import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { HTTP_GET_USER_PDI, PdiDados } from './pdi';
import { UserService } from '../../services/user/user.service';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class PdiService {

  private http = inject(HttpClient);
  private userService = inject(UserService);

  public getPDI = (): Observable<HTTP_GET_USER_PDI> => {
    return this.http.get<HTTP_GET_USER_PDI>(`${API_URL}/pdi/${this.userService.userData?.sub}`);
  }

  public putPDI = (PDI: PdiDados, PDI_ID: string): Observable<any> => {
    return this.http.put<any>(`${API_URL}/pdi`, {
      ...PDI,
      userId: this.userService.userData?.sub
    }, {
      headers: new HttpHeaders().set('pdiId', PDI_ID)
    })
  }
}
