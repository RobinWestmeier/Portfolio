import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { SharedService } from '../../shared.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TranslateModule, CommonModule, HeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {

  currentLang: string = 'en';
  constructor(
    private sharedService: SharedService,
    private translateService: TranslateService,
    private cdRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const lang = localStorage.getItem('lang') || 'en';
      this.currentLang = lang;
      this.translateService.use(lang);

      this.translateService.onLangChange.subscribe(() => {
        this.currentLang = this.translateService.currentLang;
        this.cdRef.detectChanges(); // Manuelles Triggern der Ansicht-Aktualisierung
      });
    }
  }

  changeLang(lang: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
      this.translateService.use(lang);
    }
  }

  scrollTo(targetId: string): void {
    this.sharedService.scrollTo(targetId);
  }

  isGER(): boolean {
    return this.currentLang === 'de';
  }

  openGithub() {
    window.open('https://github.com/RobinWestmeier', '_blank');
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/', '_blank');
  }
}
