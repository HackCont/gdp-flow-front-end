import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { HeaderCardComponent } from '../../../ui/header-card/header-card.component';
import { TimeLineData } from './timeline-content';
import { TimelineMoment, TimelineService } from '../timeline.service';

import {takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  protected timeLineData: TimeLineData[] = [];

  ngOnInit(): void {
    this.checkLastMoment();
  }

  private checkLastMoment = () => {
    this.timelineService.lastAddedMoment$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(moment => {
      if (moment) {
        this.addLastMoment(moment);
      }
    });
  }

  private addLastMoment = (moment: TimelineMoment) => {
    this.timeLineData.push(moment)
  }
}
