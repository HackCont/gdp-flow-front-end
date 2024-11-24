import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthTemplateComponent } from "../../ui/auth-template/auth-template.component";
import { FORMS_MODULE } from '../../global/modules/forms-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_VALIDATION, PASSWORD_VALIDATION } from '../../global/validations/auth-validations';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, AuthTemplateComponent, ...FORMS_MODULE],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {

  protected form!: FormGroup;

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  private authService = inject(AuthService);

  ngOnInit(): void {
    this.initForm();
  }

  private initForm = () => {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', EMAIL_VALIDATION],
      password: ['', PASSWORD_VALIDATION]
    })
  }

  protected handleNewUser = () => {
    
    if (!this.form.valid) {
      alert("Preencha suas informações corretamente.");
      this.form.markAllAsTouched();
      return;
    };
    
    this.onPostNewUser();
  }

  private onPostNewUser = () => {
    const newUser = this.form.getRawValue();

    this.authService.postNewUser(newUser).subscribe({
      next: (post_user_success) => {
        this.router.navigateByUrl('/login');
      },
      error: (post_user_error: HttpErrorResponse) => {
        console.log('post_user_error: ', post_user_error);
      }
    });
  }

  protected handleBackToLogin = () => {
    this.router.navigateByUrl('/login')
  }
}
