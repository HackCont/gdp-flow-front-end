import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from "./ui/sidebar/sidebar.component";
import { HeaderComponent } from './ui/header/header.component';
import { NgClass, NgStyle } from '@angular/common';
import { provideIcons } from '@ng-icons/core';
import { ionCheckmark, ionCreateOutline, ionPencil } from '@ng-icons/ionicons';

@Component({
  standalone: true,
  imports: [RouterModule, SidebarComponent, HeaderComponent, NgClass, NgStyle],
  providers: [provideIcons({ ionCreateOutline, ionPencil, ionCheckmark })],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected routesWithLayout = ['/perfil', '/timeline', '/pdi', '/modo-apresentacao']
  protected router = inject(Router);
}
