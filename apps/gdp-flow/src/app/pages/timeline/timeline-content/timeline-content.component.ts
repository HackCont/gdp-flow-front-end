import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { HeaderCardComponent } from '../../../ui/header-card/header-card.component';
import { TimeLineData } from './timeline-content';
import { TimelineService, TimelineMoment } from '../timeline.service';

import {takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import moment from 'moment';

@Component({
  selector: 'app-timeline-content',
  standalone: true,
  imports: [CommonModule, HeaderCardComponent, NgClass],
  templateUrl: './timeline-content.component.html',
  styleUrl: './timeline-content.component.scss',
})
export class TimelineContentComponent implements OnInit {

  private timelineService = inject(TimelineService);
  private destroyRef = inject(DestroyRef);

  @Input() timeLineMomentData: TimeLineData[] = [];

  ngOnInit(): void {
    this.checkLastMoment();
  }

  private checkLastMoment = () => {
    this.timelineService.lastAddedMoment$.pipe(
      takeUntilDestroyed(this.destroyRef),
      map(momentItem => {
        return {
          ...momentItem,
          data: moment(momentItem?.data).add('days', 1).toDate().toLocaleDateString()
        }
      })
    ).subscribe(momentItem => {
      if (momentItem.title) {
        this.addLastMoment(momentItem as any);
      }
    });
  }

  private addLastMoment = (moment: TimelineMoment) => {
    this.timeLineMomentData.push(moment)
    
  }
}
