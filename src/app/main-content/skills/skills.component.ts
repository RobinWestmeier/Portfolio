import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(private sharedService: SharedService) {}

  scrollTo(targetId: string): void {
    this.sharedService.scrollTo(targetId);
  }

}
