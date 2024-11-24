import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Inputs
 * - text!: string
 */

@Component({
  selector: 'app-router-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './router-header.component.html',
  styleUrl: './router-header.component.scss',
})
export class RouterHeaderComponent {
  @Input() text!: string;
}
