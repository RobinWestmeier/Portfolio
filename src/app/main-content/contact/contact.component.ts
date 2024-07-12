import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    acceptTerms: false,
  };

  mailTest = true;

  post = {
    endPoint: 'https://robin-westmeier.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
// acceptTerms: any;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            //Hier kann man alles hinzufügen
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
    // if (ngForm.submitted && ngForm.form.valid) {
    //   this.http
    //     .post(this.post.endPoint, this.post.body(this.contactData))
    //     .subscribe({
    //       next: (response) => {
    //         ngForm.resetForm();
    //       },
    //       error: (error) => {},
    //       complete: () => {},
    //     });
    // }
  }

  showPopup() {
    var popup = document.getElementById('popup');
    if (popup) {
      popup.style.display = 'block';

      setTimeout(function () {
        if (popup) {
          popup.style.display = 'none';
        }
      }, 3000);
    }
  }

  goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
