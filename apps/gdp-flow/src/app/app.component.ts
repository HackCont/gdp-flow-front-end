import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from "./ui/sidebar/sidebar.component";
import { HeaderComponent } from './ui/header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, SidebarComponent, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected routesWithLayout = ['/perfil']
  protected router = inject(Router);
}
