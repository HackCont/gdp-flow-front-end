import { Component, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionAnalyticsOutline, ionPersonOutline, ionPieChartOutline, ionPlayCircleOutline } from '@ng-icons/ionicons';
import { SidebarMenu } from './sidebar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIconComponent, NgClass],
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
      rota: '/perfil'
    },
    {
      icon: 'ionAnalyticsOutline',
      txt: 'Linha do tempo',
      rota: '/timeline'
    },
    {
      icon: 'ionPieChartOutline',
      txt: 'PDI',
      rota: ''
    },
    {
      icon: 'ionPlayCircleOutline',
      txt: 'Modo de apresentação',
      rota: ''
    },
  ];

}
