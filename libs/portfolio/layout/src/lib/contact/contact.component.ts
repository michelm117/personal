import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'personal-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  faMessage = faEnvelope;
  faLocation = faLocationDot;

  contactForm!: FormGroup;
  name!: string;
  email!: string;
  subject!: string;
  message!: string;

  buttonClicked = false;
  sendSuccessfully = false;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: new FormControl(this.name, [Validators.required]),
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      subject: new FormControl(this.subject, [Validators.required]),
      message: new FormControl(this.message, [Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit() {
    this.buttonClicked = true;
    if (this.contactForm.invalid) {
      console.error('Could not send');
      return;
    }

    this.http
      .post<string>(
        '/api/sendEmail',
        {
          message: this.contactForm.get('message')?.value,
          email: this.contactForm.get('email')?.value,
          subject: this.contactForm.get('subject')?.value,
          name: this.contactForm.get('name')?.value,
        },
        this.httpOptions
      )
      .subscribe({
        next: (data) => {
          this.sendSuccessfully = true;
          console.log(data);
        },
        error: (err) => {
          this.sendSuccessfully = false;
          console.error(err);
        },
      });

    console.log('SEND');
  }
}
