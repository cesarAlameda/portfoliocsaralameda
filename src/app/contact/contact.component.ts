import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true, // Marca el componente como standalone
  imports: [ReactiveFormsModule, CommonModule], // Importa los módulos necesarios
  templateUrl: './contact.component.html', // Plantilla HTML
  styleUrls: ['./contact.component.css'] // Vincula el archivo CSS
})
export class ContactComponent {
  contactForm; // Declara la propiedad sin inicializarla aquí

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario en el constructor, donde `fb` ya está disponible
    this.contactForm = this.fb.group({
      name: ['', Validators.required], // Campo nombre (requerido)
      email: ['', [Validators.required, Validators.email]], // Campo email (requerido y válido)
      message: ['', Validators.required], // Campo mensaje (requerido)
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value); // Muestra los valores del formulario
      // Aquí podrías integrar HttpClient para enviar los datos a un servidor
    }
  }
}