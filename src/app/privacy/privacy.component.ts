import { Component, HostListener } from '@angular/core';
import { SharedService } from '../shared.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  constructor(
    private sharedService: SharedService,
    private storageService: StorageService,
  ) {}

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
  }
}
