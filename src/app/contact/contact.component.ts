import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';
import { ScrollAnimateDirective } from '../shared/scroll-animate.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm;
  formSubmitted = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit() {
    emailjs.init(environment.emailjs.publicKey); 
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      this.submitStatus = 'idle';
      try {
        await emailjs.send(
          environment.emailjs.serviceId,
          environment.emailjs.templateId,
          {
            name: this.contactForm.value.name,
            email: this.contactForm.value.email,
            message: this.contactForm.value.message
          }
        );
        this.submitStatus = 'success';
        this.contactForm.reset();
        this.formSubmitted = false;
        setTimeout(() => this.submitStatus = 'idle', 5000);
      } catch (error) {
        console.error('Error al enviar:', error);
        this.submitStatus = 'error';
      }
    }
  }
}
