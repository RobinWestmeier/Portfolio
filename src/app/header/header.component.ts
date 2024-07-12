import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private sharedService: SharedService) {}

  menuOpen = false;

  scrollTo(targetId: string): void {

    this.sharedService.scrollTo(targetId);
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
