import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm;

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
    if (this.contactForm.valid) {
      try {
        const response = await emailjs.send(
          environment.emailjs.serviceId,
          environment.emailjs.templateId,
          {
            name: this.contactForm.value.name,
            email: this.contactForm.value.email,
            message: this.contactForm.value.message
          }
        );
        
        console.log('Email enviado!', response.status, response.text);
        alert('Mensaje enviado con éxito!');
        this.contactForm.reset();
      } catch (error) {
        console.error('Error al enviar:', error);
        alert('Error al enviar el mensaje. Por favor inténtalo de nuevo más tarde.');
      }
    }
  }
}