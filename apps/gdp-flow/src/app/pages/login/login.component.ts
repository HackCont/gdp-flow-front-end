import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTemplateComponent } from "../../ui/auth-template/auth-template.component";
import { FORMS_MODULE } from '../../global/modules/forms-module';
import { AuthService } from '../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

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

  private authService = inject(AuthService);

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

    // Chama endpoint de autenticação.
    this.onAuthLogin();
  }

  private onAuthLogin = () => {
    const {email, password} = this.form.getRawValue();

    this.authService.authLogin(email, password).subscribe({
      next: (post_login_success) => {
        console.log('post_login_success: ', post_login_success);
      },
      error: (post_login_error: HttpErrorResponse) => {
        console.log('post_login_error: ', post_login_error);
      },
    });
  }

  protected handleNavigateToSignUpPage = () => {
    this.router.navigateByUrl('/cadastro')
  }
}
