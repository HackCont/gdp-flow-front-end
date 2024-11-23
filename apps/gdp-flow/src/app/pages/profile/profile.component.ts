import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterHeaderComponent } from '../../ui/router-header/router-header.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterHeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  
}
