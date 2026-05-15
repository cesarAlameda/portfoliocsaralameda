import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../shared/scroll-animate.directive';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  architecture: string;
  apis: string[];
  integrations: string[];
  challenges: string[];
  results: string;
  url: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'AgroTrueque',
      description: 'Plataforma de intercambio de productos agrícolas que conecta comunidades rurales para reducir el desperdicio alimentario mediante un sistema de trueque digital.',
      image: 'assets/project2.png',
      technologies: ['Java', 'PHP', 'Android', 'Retrofit', 'MySQL'],
      architecture: 'Arquitectura cliente-servidor con API REST en PHP, consumo desde Android mediante Retrofit, y base de datos MySQL para persistencia.',
      apis: ['API REST propia para gestión de usuarios y ofertas', 'Endpoint de autenticación', 'CRUD de productos agrícolas'],
      integrations: ['Hostinger hosting para API', 'Retrofit para comunicación HTTP', 'Base de datos MySQL remota'],
      challenges: [
        'Coordinar la comunicación eficiente entre la app Android y el backend PHP',
        'Manejo de autenticación segura en dispositivos móviles',
        'Optimización de consultas para tiempos de respuesta aceptables en redes móviles'
      ],
      results: 'Aplicación funcional completa con registro de usuarios, publicación de ofertas y sistema de intercambio. Proyecto final de ciclo con alta calificación.',
      url: 'https://github.com/cesarAlameda/AgroTrueque',
      category: 'Full-Stack'
    },
    {
      title: 'Servicio de Conexión SSH',
      description: 'Servicio de Windows para establecer conexiones remotas seguras mediante SSH, con interfaz gráfica WPF para administración de equipos.',
      image: 'assets/project1.png',
      technologies: ['C#', '.NET', 'WPF', 'SSH', 'Windows Services'],
      architecture: 'Arquitectura en capas con servicio Windows como backend de conexión y aplicación WPF como frontend de administración.',
      apis: ['API propia para gestión de conexiones SSH', 'Cmdlets personalizados para administración remota'],
      integrations: ['Integración con servicio SSH de Windows', 'Conexión segura mediante autenticación por clave'],
      challenges: [
        'Implementación de protocolo SSH desde cero en .NET',
        'Gestión de sesiones concurrentes',
        'Diseño de interfaz WPF intuitiva para administradores no técnicos'
      ],
      results: 'Herramienta funcional de administración remota desplegada en entorno empresarial para gestión de equipos.',
      url: 'https://github.com/cesarAlameda',
      category: 'Backend'
    },
    {
      title: 'DinoInvasion',
      description: 'Videojuego móvil desarrollado con Canvas API de Android, demostrando capacidades de desarrollo de juegos y gráficos en tiempo real.',
      image: 'assets/project3.png',
      technologies: ['Java', 'Android SDK', 'Canvas API'],
      architecture: 'Arquitectura de juego basada en game loop con renderizado mediante Canvas API para gráficos 2D en tiempo real.',
      apis: ['Android Canvas API para renderizado', 'Android Input Events para control táctil'],
      integrations: ['Integración con ciclo de vida de Activity de Android'],
      challenges: [
        'Optimización de renderizado para dispositivos de gama baja',
        'Implementación de detección de colisiones precisa',
        'Diseño de game loop estable con frame rate consistente'
      ],
      results: 'Juego completo y publicado con mecánicas pulidas y rendimiento optimizado para dispositivos Android.',
      url: 'https://github.com/cesarAlameda/CsarAlamedaJuego',
      category: 'Mobile'
    },
    {
      title: 'Portfolio Personal',
      description: 'Este mismo portfolio, desarrollado con Angular 19 standalone, diseñado para reflejar un perfil profesional especializado en backend, APIs y automatización.',
      image: 'assets/project4.png',
      technologies: ['Angular 19', 'TypeScript', 'CSS', 'EmailJS'],
      architecture: 'Single-page application con componentes standalone, ChangeDetectionStrategy.OnPush, y sistema de diseño basado en CSS custom properties.',
      apis: ['EmailJS para envío de formulario de contacto'],
      integrations: ['EmailJS API para servicio de correo', 'GitHub Pages para despliegue'],
      challenges: [
        'Migración de diseño legacy a sistema de diseño premium sin dependencias externas',
        'Implementación de animaciones sutiles con rendimiento nativo',
        'Mantenimiento de funcionalidad EmailJS mientras se rediseña completamente la UI'
      ],
      results: 'Portfolio profesional moderno con diseño premium, SEO optimizado, y experiencia de usuario fluida.',
      url: 'https://github.com/cesarAlameda',
      category: 'Frontend'
    }
  ];
}
