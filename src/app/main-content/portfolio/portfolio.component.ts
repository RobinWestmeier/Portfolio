import { Component } from '@angular/core';
import { PortfolioItem } from './portfolio-item.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioItems: PortfolioItem[] = [
    {
      imageUrl: 'assets/img/join.png',
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      liveTestUrl: '',
      gitHubUrl: 'https://github.com/RobinWestmeier'
    },
    {
      imageUrl: 'assets/img/el-pollo.png',
      title: 'El Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach.',
      liveTestUrl: '',
      gitHubUrl: 'https://github.com/RobinWestmeier'
    }
  ];


  openLink(linkId: string) {
    window.open(linkId, '_blank');
}
}