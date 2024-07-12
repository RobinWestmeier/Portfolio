import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private sharedService: SharedService) {}

  scrollTo(targetId: string): void {
    this.sharedService.scrollTo(targetId);
  }

  openGithub() {
    window.open('https://github.com/', '_blank');
  }

  openLinkedIn() {
    window.open(
      'https://www.linkedin.com/',
      '_blank'
    );
  }
}
