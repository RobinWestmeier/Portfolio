import { Component, Inject, OnInit, Renderer2, PLATFORM_ID } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor( @Inject(PLATFORM_ID) private platformId: object, private sharedService: SharedService, private renderer: Renderer2) {}

  menuOpen = false;
  deviceWidth = 0;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.deviceWidth = window.innerWidth;
      this.renderer.listen('window', 'resize', (event) => {
        this.deviceWidth = event.target.innerWidth;
      });
    }
  }

  scrollTo(targetId: string): void {
    this.sharedService.scrollTo(targetId);
    this.menuOpen = false;
  }

  toggleMenu() {
    if (this.deviceWidth < 751) {
      this.menuOpen = !this.menuOpen;
    }
  }
}
