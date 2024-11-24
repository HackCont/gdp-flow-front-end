import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterHeaderComponent } from '../../ui/router-header/router-header.component';
import { HeaderCardComponent } from '../../ui/header-card/header-card.component';
import { NgIcon } from '@ng-icons/core';
import { HTTP_GET_USER_PDI, PdiCardData, PdiDados } from './pdi';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FORMS_MODULE } from '../../global/modules/forms-module';
import { PdiService } from './pdi.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pdi',
  standalone: true,
  imports: [CommonModule, RouterHeaderComponent, HeaderCardComponent, NgIcon, FORMS_MODULE],
  templateUrl: './pdi.component.html',
  styleUrl: './pdi.component.scss',
})
export class PdiComponent implements OnInit{
  protected currentIndexCard!: number;
  
  protected form!: FormGroup;
  private userPDI!: HTTP_GET_USER_PDI;

  private formBuilder = inject(FormBuilder);
  private pdiService = inject(PdiService);

  protected isEditingGoal = false;

  protected pdiCardData: PdiCardData[] = [
    {
      title: 'Começar a fazer',
      formControlName: 'startDoing',
      placeholder: "Devo começar a fazer..."
    },
    {
      title: 'Parar de fazer',
      formControlName: 'stopDoing',
      placeholder: "Devo parar de fazer..."
    },
    {
      title: 'Fazer menos',
      formControlName: 'doLess',
      placeholder: ""
    },
    {
      title: 'Continuar a fazer',
      formControlName: 'keepDoing',
      placeholder: ""
    },
    {
      title: 'Fazer mais',
      formControlName: 'doMore',
      placeholder: ""
    },
  ]

  ngOnInit(): void {
    this.onGetPDI();
    this.initForm();
  }

  private onGetPDI = () => {
    this.pdiService.getPDI().subscribe({
      next: (get_pdi_success) => {
        this.userPDI = get_pdi_success;

        this.initForm();
        console.log('userPDI: ', this.userPDI);
      },
      error: (get_pdi_error: HttpErrorResponse) => {
        console.log('get_pdi_error:', get_pdi_error)
      }
    })
  }

  private initForm = () => {
    const {startDoing, stopDoing, doLess, keepDoing, doMore, goal} = this.userPDI || {};

    this.form = this.formBuilder.group({
      startDoing: [startDoing],
      stopDoing: [stopDoing],
      doLess: [doLess],
      keepDoing: [keepDoing],
      doMore: [doMore],
      goal: [goal]
    });
  }

  protected onPutPDI = () => {
    const pdiDados: PdiDados = this.form.getRawValue();

    this.pdiService.putPDI(pdiDados, this.userPDI.id).subscribe({
      next: (put_pdi_success) => {
        console.log('put_pdi_success: ', put_pdi_success);
        this.onGetPDI();
      },
      error: (put_pdi_error: HttpErrorResponse) => {
        console.log('put_pdi_error:', put_pdi_error)
      }
    })
  }
}
