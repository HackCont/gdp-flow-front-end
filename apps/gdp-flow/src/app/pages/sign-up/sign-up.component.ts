import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthTemplateComponent } from "../../ui/auth-template/auth-template.component";
import { FORMS_MODULE } from '../../global/modules/forms-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_VALIDATION, PASSWORD_VALIDATION } from '../../global/validations/auth-validations';

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
    
    const newUser = this.form.getRawValue();
    alert(JSON.stringify(newUser));
  }
}
