import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogOutOutline, ionPlayCircleOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ ionPlayCircleOutline, ionLogOutOutline })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
