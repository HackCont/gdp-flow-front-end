import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogOutOutline, ionPlayCircleOutline } from '@ng-icons/ionicons';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ ionPlayCircleOutline, ionLogOutOutline })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  private cookieService = inject(CookieService);
  private router = inject(Router);

  protected handleLogout = () => {
    this.cookieService.deleteAll();
    this.router.navigateByUrl('/login');
  }

}
