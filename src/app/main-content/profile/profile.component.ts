import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TranslateModule, CommonModule, HeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private sharedService: SharedService) {}

  scrollTo(targetId: string): void {
    this.sharedService.scrollTo(targetId);
  }

  openGithub() {
    window.open('https://github.com/RobinWestmeier', '_blank');
  }

  openLinkedIn() {
    window.open(
      'https://www.linkedin.com/',
      '_blank'
    );
  }
}
