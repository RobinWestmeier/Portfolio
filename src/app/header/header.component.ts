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
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  lang: string = 'en';
  menuOpen = false;
  deviceWidth = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private sharedService: SharedService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private translateService: TranslateService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.lang = this.storageService.getItem('lang') || 'en';
      this.translateService.use(this.lang);
      this.deviceWidth = window.innerWidth;
      this.renderer.listen('window', 'resize', (event) => {
        this.deviceWidth = event.target.innerWidth;
      });
    }
  }

  changeLang(selectedLanguage: string) {
    this.storageService.setItem('lang', selectedLanguage);
    this.lang = selectedLanguage;
    this.translateService.use(selectedLanguage);
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

  scrollTo(targetId: string): void {
    this.sharedService.scrollTo(targetId);
    this.menuOpen = false;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleMenu() {
    if (this.deviceWidth < 851) {
      this.menuOpen = !this.menuOpen;
    }
  }
}
