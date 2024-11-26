import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterHeaderComponent } from '../../ui/router-header/router-header.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionAddOutline } from '@ng-icons/ionicons';
import { TimelineContentComponent } from './timeline-content/timeline-content.component';
import { FormBuilder, Validators } from '@angular/forms';
import { FORMS_MODULE } from '../../global/modules/forms-module';
import { TimelineMoment, TimelineService } from './timeline.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, RouterHeaderComponent, NgIcon, TimelineContentComponent, FORMS_MODULE],
  providers: [provideIcons({ionAddOutline}), TimelineService],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {

  private formBuilder = inject(FormBuilder);
  private timelineService = inject(TimelineService);
  
  protected form = this.formBuilder.group({
    data: ['', [Validators.required]],
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  protected handleAddNewMoment = () => {

    if (!this.form.valid) {
      alert("Preencha as informações corretamente.")
      return;
    };

    const dateISO = new Date(this.form.controls['data'].value ?? '').toISOString();
    
    if (this.form.valid) {

      const momentInfos = {
        ...this.form.getRawValue(),
        data: dateISO,
      } as TimelineMoment;    

      // this.onPostMoment(momentInfos);
      this.timelineService.lastAddedMoment$.next(momentInfos);
      this.form.reset();
    }
  }

  private onPostMoment = (moment: TimelineMoment) => {
    this.timelineService.postMoment(moment).subscribe({
      next: (post_moment_success) => {
        console.log('post_moment_success: ', post_moment_success);
      },
      error: (post_moment_error: HttpErrorResponse) => {
        console.log('post_moment_error: ', post_moment_error);
      }
    })
  }
}
