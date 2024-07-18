import { Component, OnInit, ChangeDetectorRef, PLATFORM_ID, Inject } from '@angular/core';
import { PortfolioItem } from './portfolio-item.model';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from '../../storage.service';
import { AnimationService } from '../../animation.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  portfolioItems: PortfolioItem[] = [
    {
      imageUrl: 'assets/img/join.png',
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description: ' {{join | translate}}',
      liveTestUrl:
        'https://gruppe-786.developerakademie.net/components/login/login.html',
      gitHubUrl: 'https://github.com/RobinWestmeier',
    },
    {
      imageUrl: 'assets/img/el-pollo.png',
      title: 'El Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: "{{'elPollo' | translate}}",
      liveTestUrl:
        'https://robin-westmeier.developerakademie.net/el-pollo-loco/index.html',
      gitHubUrl: 'https://github.com/RobinWestmeier',
    },
  ];

  openLink(linkId: string) {
    window.open(linkId, '_blank');
  }

  constructor(
    private translateService: TranslateService,
    private cdRef: ChangeDetectorRef,
    private animationService: AnimationService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const lang = localStorage.getItem('lang') || 'en';
      this.translateService.use(lang);
    }
    this.animationService.applyAnimation();
  }

  changeLang(lang: string): void {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
    this.cdRef.detectChanges(); // Manuelles Triggern der Ansicht-Aktualisierung
  }
}
