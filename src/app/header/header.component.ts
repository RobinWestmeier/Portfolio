import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
constructor(private sharedService: SharedService) {}

scrollTo(targetId: string): void {
  this.sharedService.scrollTo(targetId);
}

}
