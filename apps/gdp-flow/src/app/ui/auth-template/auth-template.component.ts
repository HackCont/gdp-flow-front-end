import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

type Config = {title: string, message: string, submitBtnText: string, actionText: string, actionBtnText: string};

@Component({
  selector: 'app-auth-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-template.component.html',
  styleUrl: './auth-template.component.scss',
})
export class AuthTemplateComponent {

  @Input({required: true}) config!: Config;

  @Output() submitBtnEmitter = new EventEmitter<void>();
  @Output() actionBtnEmitter = new EventEmitter<void>();

  protected handleClickSubmitBtn = () => {
    this.submitBtnEmitter.emit();
  }

  protected handleClickActionBtn = () => {
    this.actionBtnEmitter.emit();
  }
}
