import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor() {}

  public applyAnimation(): void {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }
}
