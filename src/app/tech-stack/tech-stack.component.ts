import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../shared/scroll-animate.directive';

interface TechCategory {
  name: string;
  technologies: string[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  categories: TechCategory[] = [
    {
      name: 'Backend',
      technologies: ['Java', 'Spring Boot', 'C#', '.NET', 'PHP', 'Node.js', 'Python']
    },
    {
      name: 'APIs & Integrations',
      technologies: ['REST APIs', 'Postman', 'Swagger', 'SSH', 'ERP Connectors', 'API Design']
    },
    {
      name: 'Databases',
      technologies: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server']
    },
    {
      name: 'AI & Tools',
      technologies: ['OpenAI API', 'LangChain', 'LLM Workflows', 'Automation Scripts', 'Git', 'Docker']
    },
    {
      name: 'Frontend',
      technologies: ['Angular', 'TypeScript', 'HTML/CSS', 'JavaScript']
    }
  ];
}
