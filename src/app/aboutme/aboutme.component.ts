import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../shared/scroll-animate.directive';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {
  profileImage = 'assets/profile.png';

  isFlipped = false;

  skills = [
    'Java',
    'Spring Boot',
    'Angular',
    'APIs REST',
    'C#',
    '.NET',
    'PHP',
    'MySQL',
    'PostgreSQL',
    'Oracle',
    'Docker',
    'Git',
    'DevOps',
    'LLMs',
    'Automatización'
  ];

  aboutText = 'Desarrollador de software especializado en APIs, integraciones empresariales y automatizacion inteligente. Con aproximadamente un ano de experiencia profesional, he trabajado en el desarrollo de modulos backend en Java, servicios Windows en C# y aplicaciones full-stack con PHP y Angular.\n\nMi enfoque esta en la arquitectura backend limpia, el diseno de APIs REST escalables y la integracion de sistemas empresariales. Trabajo con bases de datos relacionales (MySQL, Oracle, PostgreSQL) y aplico principios de arquitectura limpia y buenas practicas DevOps en cada proyecto.\n\nActualmente estoy explorando activamente el campo de la IA aplicada: workflows con LLMs, automatizacion inteligente y APIs de IA para resolver problemas de negocio reales. Mi objetivo es combinar una base solida en backend e integraciones con las capacidades emergentes de la inteligencia artificial.';

  linkedinUrl = 'https://www.linkedin.com/in/cesar-alameda-barquillo-b059882b0';
  githubUrl = 'https://github.com/cesarAlameda';

  toggleFlip(): void {
    this.isFlipped = !this.isFlipped;
  }
}
