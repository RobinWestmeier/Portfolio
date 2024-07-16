import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(private sharedService: SharedService) {}

  scrollTo(targetId: string): void {
    this.sharedService.scrollTo(targetId);
  }

}
