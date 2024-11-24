import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterHeaderComponent } from '../../ui/router-header/router-header.component';
import { HeaderCardComponent } from '../../ui/header-card/header-card.component';
import { NgIcon } from '@ng-icons/core';
import { PdiCardData } from './pdi';

@Component({
  selector: 'app-pdi',
  standalone: true,
  imports: [CommonModule, RouterHeaderComponent, HeaderCardComponent, NgIcon,],
  templateUrl: './pdi.component.html',
  styleUrl: './pdi.component.scss',
})
export class PdiComponent {
  pdiCardData: PdiCardData[] = [
    {
      title: 'Começar a fazer',
      description: '"Começar a participar de forma mais ativa nas reuniões de equipe, contribuindo com ideias e sugestões para melhorias nos projetos. Além disso, dedicar pelo menos 1 hora semanal para estudo de tecnologias emergentes relacionadas à minha área de atuação."'
    },
    {
      title: 'Parar de fazer',
      description: '"Parar de procrastinar tarefas importantes deixando-as para o último minuto. Também preciso evitar assumir mais compromissos do que consigo gerenciar, priorizando qualidade em vez de quantidade."'
    },
    {
      title: 'Fazer menos',
      description: '"Reduzir o tempo gasto em tarefas administrativas que podem ser delegadas ou automatizadas. Também dedicar menos horas às redes sociais durante o horário de trabalho para evitar distrações."'
    },
    {
      title: 'Continuar a fazer',
      description: '"Continuar a organizar meu trabalho utilizando ferramentas de gestão, como o Trello, para manter a produtividade. Além disso, seguir revisando o código com atenção aos padrões estabelecidos e colaborando com os colegas em revisões de PR."'
    },
    {
      title: 'Fazer mais',
      description: '"Focar mais no desenvolvimento de habilidades interpessoais, como comunicação assertiva e trabalho em equipe, participando de workshops ou treinamentos voltados para soft skills. Além disso, realizar mais testes e validações no código para garantir entregas com menos erros."'
    },
  ]

}
