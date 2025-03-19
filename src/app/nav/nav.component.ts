import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  categories = ['Home', 'Projects', 'Skills', 'Contact','CV'];

  handleCategoryClick(category: string, event: Event) {
    if (category === 'CV') {
      event.preventDefault(); // Evita que cambie de página
      this.downloadCV();
    }
  }

  downloadCV() {
    const cvUrl = 'assets/CésarAlamedaBarquillo.pdf'; // Ruta de tu CV en la carpeta "assets"
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CésarAlamedaBarquillo.pdf'; // Nombre del archivo descargado
    link.click();
  }
}