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

  categories = ['Sobre mí', 'Proyectos', 'Skills', 'Contacto','CV'];

  handleCategoryClick(category: string, event: Event) {
    if (category === 'CV') {
      event.preventDefault(); 
      this.downloadCV();
    }else{
      event.preventDefault();
      this.scrollToSection(category);
    }

    


  }
  scrollToSection(section: string) {
    const sectionId = section.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  downloadCV() {
    const cvUrl = 'assets/CésarAlamedaBarquillo.pdf'; 
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CésarAlamedaBarquillo.pdf'; 
    link.click();
  }
}