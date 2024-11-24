import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterHeaderComponent } from '../../ui/router-header/router-header.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionAddOutline } from '@ng-icons/ionicons';
import { TimelineContentComponent } from './timeline-content/timeline-content.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, RouterHeaderComponent, NgIcon, TimelineContentComponent],
  providers: [provideIcons({ionAddOutline})],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {}
