import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [TranslateService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private translateService: TranslateService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.translateService.setDefaultLang('en');
    const savedLang = this.storageService.getItem('lang') || 'en';
    this.translateService.use(savedLang);
  }
}
