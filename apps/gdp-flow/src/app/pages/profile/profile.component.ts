import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterHeaderComponent } from '../../ui/router-header/router-header.component';
import { NgIcon } from '@ng-icons/core';
import { HeaderCardComponent } from '../../ui/header-card/header-card.component';
import { Informations } from './profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterHeaderComponent, NgIcon, HeaderCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {

  // Box - Informações pessoais
  informations: Informations[] = [
    {
      label: 'Nome',
      txt: 'Rodrigo'
    },
    {
      label: 'Sobrenome',
      txt: 'Silva Marques'
    },
    {
      label: 'E-mail',
      txt: 'rodrigo.marques@exemple.com'
    },
    {
      label: 'Celular',
      txt: '(51) 9 9924-9292'
    },
  ];

  skills: string[] = ['Typescript', 'CSS', 'HTML', 'Java', 'UX', 'UI'];

  protected isEditingInfos = false;
  
}
