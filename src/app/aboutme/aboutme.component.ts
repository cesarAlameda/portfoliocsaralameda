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
  profileImage = 'assets/profile.png';

  aboutText = [
    `Desarrollador de Aplicaciones Multiplataforma titulado en el IES Ribera del Tajo, con experiencia en prácticas en MAIS Informática, donde desarrollé módulos en Java y servicios Windows en C#. He creado back-ends en PHP y aplicaciones de escritorio con WPF (.NET), así como apps móviles Android en Java.`,

    `Domino tecnologías frontend (HTML, CSS, JavaScript) y manejo bases de datos SQL (MySQL, Oracle, PostgreSQL), y cuento con conocimientos de Python para scripting y automatización. Últimamente, estoy profundizando de forma autodidacta en Spring Boot, aprendiendo a diseñar APIs REST escalables y a implementar arquitecturas limpias.`,

    `Trabajo cómodamente en entornos ágiles y colaborativos, aplicando buenas prácticas DevOps y documentación técnica. Mi perfil combina versatilidad técnica, actitud proactiva y ganas de seguir creciendo con las últimas tendencias del desarrollo de software.`
  ];

  linklinkedin = 'https://www.linkedin.com/in/césar-alameda-barquillo-b059882b0';
  linkgithub = 'https://github.com/cesarAlameda';
  linkedinlogo = 'assets/linkedin.png';
  githublogo = 'assets/github.png';
}
