import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
/**
 * Inputs
 * - title!: string
 * - subTitle!: string
 */
@Component({
  selector: 'app-header-card',
  standalone: true,
  imports: [CommonModule, NgIcon],
  templateUrl: './header-card.component.html',
  styleUrl: './header-card.component.scss',
})
export class HeaderCardComponent {
 
  @Input() title!: string;
  @Input() subTitle!: string;
}
