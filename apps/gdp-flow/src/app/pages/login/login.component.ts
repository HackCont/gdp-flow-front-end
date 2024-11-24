import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTemplateComponent } from "../../ui/auth-template/auth-template.component";
import { FORMS_MODULE } from '../../global/modules/forms-module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatIconModule, AuthTemplateComponent, FORMS_MODULE],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {

  protected form!: FormGroup;
  protected showPassword = false;
  protected showErrors = false;

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  ngOnInit(): void {
    this.initForm();

  }

  private initForm = () => {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  };

  protected handleVisibilityPassword = () => {
    this.showPassword = !this.showPassword;
  }

  protected handleLogin = () => {

    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const rawValue = this.form.getRawValue();
    alert(JSON.stringify(rawValue));
  }

  protected handleNavigateToSignUpPage = () => {
    this.router.navigateByUrl('/cadastro')
  }
}
