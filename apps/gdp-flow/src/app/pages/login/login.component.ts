import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTemplateComponent } from "../../ui/auth-template/auth-template.component";
import { FORMS_MODULE } from '../../global/modules/forms-module';
import { AuthService } from '../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from '../../services/token/token.service';

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

  protected showLoader = false;

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  private authService = inject(AuthService);
  private tokenService = inject(TokenService);

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
    
    this.showLoader = true;

    // this.tokenService.saveToken('eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICItbWU3cDZsYnU2N0pfR3BQUllQUDE4N1BTQWdVWnYwMUE4Z0FzV05ELXZZIn0.eyJleHAiOjE3MzI0MTY2OTksImlhdCI6MTczMjQxNjM5OSwianRpIjoiMzkyYzhlZjAtMWY4OS00OTI4LTg5ZGUtYjE4NjIyMjkyMDAyIiwiaXNzIjoiaHR0cHM6Ly9jcmVhdGl2ZS1vZGVsbGEtaGFjay1jb250LWU5YzJhMzNhLmtveWViLmFwcC9yZWFsbXMvR0RQRmxvdyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIxYWQ3NTRhOS1mZGYyLTQ4MjAtYmNjYy1jYmI3Yzg1YTQ1NjQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJnZHBmbG93Iiwic2Vzc2lvbl9zdGF0ZSI6ImVkNTdkNzk0LTFlOTQtNDM0MS04YjljLWIyZDE0ODMxNWNhNSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1nZHBmbG93IiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiZWQ1N2Q3OTQtMWU5NC00MzQxLThiOWMtYjJkMTQ4MzE1Y2E1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJUaGF1w6MgRW5nZWxtYW5uIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZW5nZWxtYW5uLnNvY2lhbHNAZ21haWwuY29tIiwiZ2l2ZW5fbmFtZSI6IlRoYXXDoyIsImZhbWlseV9uYW1lIjoiRW5nZWxtYW5uIiwiZW1haWwiOiJlbmdlbG1hbm4uc29jaWFsc0BnbWFpbC5jb20ifQ.kjRVITYhQImE0pP-lbYD3YmSahkO69Srvw3WrO_uaLNPWtRBiaIgQVil7LlDSG67UG4QTl6NQ0y2FTBKqXOfs0B4BLDwCh6wOcr9PVQNWzIguQFkGXVbonCSzYeoevITJu-piT4_dLk55nuFYqggz-Qkw-gnYQgSGcC-_TZpHoU2eBe9Ejb0-m03HvW41hxuzkQIk4LY_sy-zWe4yRKDXptP6OtphYvr1KyH3oqUyh6juS09VY2L-IeYcfGYT5iVVOen0uaiYr51jP6UK4g5jXQadCl-bxBKXFB2aith5-wyRA2y1DAr5lNgFTpqGTvjPFZ0PcxQPIbMtekAjb1GGg');
    this.authService.authLogin(email, password).subscribe({
      next: (post_login_success) => {
        this.showLoader = true;
        this.tokenService.saveToken(post_login_success.access_token);
        this.router.navigateByUrl('/perfil');
      },
      error: (post_login_error: HttpErrorResponse) => {
        this.showErrors = true;
        this.showLoader = false;
      },
    });

  }

  protected handleNavigateToSignUpPage = () => {
    this.router.navigateByUrl('/cadastro')
  }
}
