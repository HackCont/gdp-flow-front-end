import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { HeaderCardComponent } from '../../../ui/header-card/header-card.component';
import { TimeLineData } from './timeline-content';

@Component({
  selector: 'app-timeline-content',
  standalone: true,
  imports: [CommonModule, HeaderCardComponent, NgClass],
  templateUrl: './timeline-content.component.html',
  styleUrl: './timeline-content.component.scss',
})
export class TimelineContentComponent {
  protected timeLineData: TimeLineData[] = [
    {
      title: "Titulo da entrega",
      date: '23/11/2024',
      description: 'Descrição da integra que foi feita na data x e trouxe tai beneficios para o colaborador e para a empresa como exemplo.'
    },
    {
      title: "Titulo da entrega",
      date: '23/11/2024',
      description: 'Descrição da integra que foi feita na data x e trouxe tai beneficios para o colaborador e para a empresa como exemplo.'
    },
    {
      title: "Titulo da entrega",
      date: '23/11/2024',
      description: 'Descrição da integra que foi feita na data x e trouxe tai beneficios para o colaborador e para a empresa como exemplo.'
    },
  ]
}
