import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterHeaderComponent } from '../../ui/router-header/router-header.component';
import { HeaderCardComponent } from '../../ui/header-card/header-card.component';
import { Information, UserInfosBlock } from './profile';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FORMS_MODULE } from '../../global/modules/forms-module';
import { UserService } from '../../services/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterHeaderComponent, HeaderCardComponent, FORMS_MODULE],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {

  // Box - Informações pessoais
  protected readonly informationsBlock: Information[] = [
    {
      id: 1,
      label: 'Nome',
      formControlName: 'firstName'
    },
    {
      id: 2,
      label: 'Sobrenome',
      formControlName: 'lastName'
    },
    {
      id: 3,
      label: 'E-mail',
      formControlName: 'email'
    },
    {
      id: 4,
      label: 'Celular',
      formControlName: 'phone'
    },
  ];

  protected readonly skills: string[] = ['Typescript', 'CSS', 'HTML', 'Java', 'UX', 'UI'];

  protected isEditingInfos = false;
  protected form!: FormGroup;

  private formBuilder = inject(FormBuilder);
  private usersService = inject(UserService);
  
  ngOnInit(): void {
    this.initForm();
  }

  private initForm = () => {
    this.form = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      skills: [''],
      bio: ['']
    });

    this.onGetUser();
  }

  private onGetUser = () => {
    this.usersService.getUser().subscribe({
      next: (get_user_success) => {
        const {firstName, lastName, email, phone} = get_user_success;
        this.fillInformationsBlock({firstName, lastName, email, phone});
        console.log('get_user_success: ', get_user_success);
      },
      error: (get_user_error: HttpErrorResponse) => {
        console.log('get_user_error: ', get_user_error);
      } 
    })
  }

  private fillInformationsBlock = (userInfos: UserInfosBlock) => {
    Object.keys(userInfos).forEach(key => {

      const infosBlockItem = this.informationsBlock.find(infoItem => infoItem.formControlName === key);

      if (infosBlockItem) {
        const valorInfo = userInfos[key as keyof UserInfosBlock];
        infosBlockItem.value = valorInfo;
        
        // ACessa o formControl e seta o valor encontrado.
        this.form.controls[infosBlockItem.formControlName].setValue(valorInfo);
      }
    })
  }

  protected handleSalvarInfos = () => {
    const rawValue = this.form.getRawValue();

  }
}
