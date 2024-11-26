import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterHeaderComponent } from '../../ui/router-header/router-header.component';
import { HeaderCardComponent } from '../../ui/header-card/header-card.component';
import { Information, Profile, UserInfosBlock } from './profile';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FORMS_MODULE } from '../../global/modules/forms-module';
import { UserService } from '../../services/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterHeaderComponent, HeaderCardComponent, NgxMaskDirective, FORMS_MODULE],
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
      formControlName: 'phone',
      mask: '(00) 0 0000-0000'
    },
  ];

  protected selectedPhotoFile = 'assets/default-user.png';
  protected skills: string[] = [];
  protected bio = '';

  protected isEditingInfos = false;
  protected isEditingSkills = false;
  protected isEditingBio = false;

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
      bio: ['', [Validators.maxLength(300)]]
    });

    this.form.controls['email'].disable();
    this.onGetUser();
  }

  private onGetUser = () => {
    this.usersService.getUser().subscribe({
      next: (get_user_success) => {
        const {firstName, lastName, email, phone, skills, bio} = get_user_success;
        
        this.fillInformationsBlock({firstName, lastName, email, phone});
        this.fillSkillsBlock(skills);
        this.fillBioBlock(bio);

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

  private fillSkillsBlock = (userSkills: string) => {

    if (!userSkills) {
      return;
    }
    
    const userSkillsArray = userSkills.split(',');

    if (userSkills.length) {
      this.skills = userSkillsArray;
    }
  }

  private fillBioBlock = (bio: string) => {
    this.bio = bio;
    this.form.controls['bio'].setValue(this.bio);
  }

  protected addNewSkillOnEnterKey = (event: KeyboardEvent, newSkillInput: HTMLInputElement) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const skill = newSkillInput.value;
      this.skills.push(skill);

      newSkillInput.value = '';
    }
  }

  protected handleSalvar = () => {
    const rawValue = {
      ...this.form.getRawValue(),
      skills: this.skills
    };

    this.onPutUser(rawValue);
  }

  private onPutUser = (profile: Profile) => {
    this.usersService.putUser(profile).subscribe({
      next: (put_user_success) => {
        this.onGetUser();
        console.log('put_user_success: ', put_user_success)
      },
      error: (put_user_error: HttpErrorResponse) => {
        console.log('put_user_error: ', put_user_error);
      }
    })
  }

  protected onPhotoUpload = (event: Event) => {
    this.selectedPhotoFile = 'assets/perfil.png';
  }
}
