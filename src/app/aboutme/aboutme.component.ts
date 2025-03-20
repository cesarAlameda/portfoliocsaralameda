import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {
  // Datos modificables para mayor flexibilidad
  profileImage = 'assets/profile.png'; // Ruta a la imagen de perfil
  // Texto de ejemplo que puede ser modificado posteriormente
  aboutText = [
    `Desarrollador de Aplicaciones Multiplataforma titulado en el I.E.S. Ribera del Tajo, con experiencia profesional en desarrollo de software para Informática MAIS. Especializado en crear soluciones tecnológicas usando WPF (.NET) para aplicaciones de escritorio y Java para desarrollo Android, complementado con implementación de backends en PHP.`,

    `Domino tecnologías frontend (HTML/CSS/JavaScript) y bases de datos SQL (Oracle/MySQL), con conocimientos adicionales en Python para scripting y automatización. Actualmente enfocado en mejorar arquitecturas limpias y escalables, combinando prácticas ágiles con metodologías DevOps.`,

    `Perfil versátil con dominio avanzado de herramientas ofimáticas y plataformas colaborativas. Capacidad demostrada para trabajo en equipo en entornos multidisciplinares. En constante formación para mantenerse actualizado con las últimas tendencias del desarrollo software.`
  ];
}