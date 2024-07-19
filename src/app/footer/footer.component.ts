import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  getToContact() {
    let element = document.getElementById('my-contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openGithub() {
    window.open('https://github.com/RobinWestmeier', '_blank');
  }

  openLinkedIn() {
    window.open(
      'https://www.linkedin.com/',
      '_blank'
    );
  }

  goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
