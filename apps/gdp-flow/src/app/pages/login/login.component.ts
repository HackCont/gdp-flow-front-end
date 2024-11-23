import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTemplateComponent } from "../../ui/auth-template/auth-template.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule, AuthTemplateComponent],
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

  protected navigateToSignUpPage = () => {
    this.router.navigateByUrl('/cadastro')
  }
}
