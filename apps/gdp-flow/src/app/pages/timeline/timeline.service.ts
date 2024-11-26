import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../../services/user/user.service';

const API_URL = environment.API_URL;
export type TimelineMoment = {data: string; title: string; description: string};

@Injectable()
export class TimelineService {

  private http = inject(HttpClient);
  private usersService = inject(UserService);

  public lastAddedMoment$ = new BehaviorSubject<TimelineMoment | null>(null);

  public postMoment = (moment: TimelineMoment) => {
    return this.http.post(`${API_URL}/moment`, {
      ...moment,
      userId: this.usersService.userData?.sub
    })
  }

  public getMoment = (userId: string) => {
    return this.http.get(`${API_URL}/moment/${userId}`);
  }
}
