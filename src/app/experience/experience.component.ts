import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../shared/scroll-animate.directive';

interface Experience {
  role: string;
  company: string;
  date: string;
  location: string;
  problem: string;
  solution: string;
  stack: string[];
  integrations: string[];
  impact: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Desarrollador de Aplicaciones Multiplataforma',
      company: 'MAIS Informática',
      date: '2024 - 2025',
      location: 'Talavera de la Reina, España',
      problem: 'La empresa necesitaba modernizar sus sistemas internos de gestión y automatizar procesos manuales que consumían tiempo significativo del equipo administrativo.',
      solution: 'Desarrollé módulos backend en Java para sistemas de gestión empresarial, implementé servicios Windows en C# para automatización de procesos, y creé una interfaz de conexión SSH basada en WPF para administración remota de equipos.',
      stack: ['Java', 'C#', '.NET', 'WPF', 'SQL', 'SSH', 'Windows Services'],
      integrations: [
        'Integración de servicios Windows con sistemas de gestión internos',
        'Implementación de protocolo SSH para conexión remota segura',
        'Conexión con bases de datos relacionales para persistencia de datos'
      ],
      impact: 'Reducción significativa de procesos manuales mediante automatización, mejora en la administración remota de equipos, y modernización de la infraestructura tecnológica de la empresa.'
    }
  ];
}
