import {
  Component,
  Inject,
  OnInit,
  Renderer2,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private sharedService: SharedService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

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

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    const target = event.target as HTMLElement;

    if (
      target.tagName === 'A' &&
      target.getAttribute('href')?.startsWith('#')
    ) {
      event.preventDefault();
      const targetId = target.getAttribute('href')!.substring(1);
      this.scrollTo(targetId);
    }
  }

  // scrollTo(targetId: string): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const targetElement = this.document.getElementById(targetId);

  //     if (targetElement) {
  //       const elementPosition =
  //         targetElement.getBoundingClientRect().top + window.pageYOffset;
  //       const offsetPosition = elementPosition - 80;

  //       window.scrollTo({
  //         top: offsetPosition,
  //         behavior: 'smooth',
  //       });
  //     }
  //   }
  // }

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
