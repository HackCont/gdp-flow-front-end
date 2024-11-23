import { Component, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionAnalyticsOutline, ionPersonOutline, ionPieChartOutline, ionPlayCircleOutline } from '@ng-icons/ionicons';
import { SidebarMenu } from './sidebar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgIconComponent, NgClass],
  providers: [provideIcons({ ionPersonOutline, ionAnalyticsOutline, ionPieChartOutline, ionPlayCircleOutline })],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  protected router = inject(Router);

  protected sidebarMenu: SidebarMenu[] = [
    {
      icon: 'ionPersonOutline',
      txt: 'Perfil do usuário',
      selected: this.router.url === '/perfil' ? true : false
    },
    {
      icon: 'ionAnalyticsOutline',
      txt: 'Linha do tempo',
      selected: false
    },
    {
      icon: 'ionPieChartOutline',
      txt: 'PDI',
      selected: false
    },
    {
      icon: 'ionPlayCircleOutline',
      txt: 'Modo de apresentação',
      selected: false
    },
  ];

}
