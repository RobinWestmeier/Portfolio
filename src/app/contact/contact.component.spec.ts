import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// export class ContactformComponent implements OnInit {
//   http = inject(HttpClient);

//   contactData = {
//     name: '',
//     email: '',
//     message: '',
//     acceptTerms: false,
//   };

//   post = {
//     endPoint: 'https://bastian-weschasit.de/sendMail.php',
//     body: (payload: any) => JSON.stringify(payload),
//     options: {
//       headers: {
//         'Content-Type': 'text/plain',
//         responseType: 'text',
//       },
//     },
//   };

//   lang: string = '';
//   germanIsSelected: boolean = false;

//   constructor(private translateService: TranslateService) {}

//   ngOnInit(): void {
//     this.lang = localStorage.getItem('lang') || 'en';
//     this.germanIsSelected = this.lang === 'de';
//     this.translateService.use(this.lang);
//     this.translateService.onLangChange.subscribe((event) => {
//       this.lang = event.lang;
//       this.germanIsSelected = this.lang === 'de';
//     });
//   }

//   changeLang(lang: any) {
//     const selectedLanguage = lang.target.value;
//     localStorage.setItem('lang', selectedLanguage);
//     this.translateService.use(selectedLanguage);
//     this.germanIsSelected = selectedLanguage === 'de';
//   }

//   onSubmit(ngForm: NgForm) {
//     if (ngForm.submitted && ngForm.form.valid) {
//       this.http
//         .post(this.post.endPoint, this.post.body(this.contactData))
//         .subscribe({
//           next: (response) => {
//             ngForm.resetForm();
//           },
//           error: (error) => {},
//           complete: () => {},
//         });
//     }
//   }

//   goUp() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }

//   showPopup() {
//     var popup = document.getElementById('popup');
//     if (popup) {
//       popup.style.display = 'block';

//       setTimeout(function () {
//         if (popup) {
//           popup.style.display = 'none';
//         }
//       }, 3000);
//     }
//   }
// }