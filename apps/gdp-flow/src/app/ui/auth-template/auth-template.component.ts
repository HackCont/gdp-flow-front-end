import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-template.component.html',
  styleUrl: './auth-template.component.scss',
})
export class AuthTemplateComponent {

  @Input({required: true}) bannerURL!: string;
  @Input({required: true}) title!: string;
  @Input({required: true}) message!: string;

}
