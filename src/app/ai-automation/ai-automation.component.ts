import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../shared/scroll-animate.directive';

interface AiEntry {
  title: string;
  description: string;
  context: string;
  tools: string[];
  workflow: string;
  learnings: string;
  status: 'exploring' | 'built' | 'learning';
}

@Component({
  selector: 'app-ai-automation',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './ai-automation.component.html',
  styleUrl: './ai-automation.component.css'
})
export class AiAutomationComponent {
  entries: AiEntry[] = [
    {
      title: 'LLM-Powered Automation Workflows',
      description: 'Exploración de flujos de trabajo automatizados utilizando grandes modelos de lenguaje para procesamiento de documentos y generación de respuestas inteligentes.',
      context: 'Identificación de oportunidades para automatizar tareas repetitivas de procesamiento de documentos y consultas usando IA generativa en entornos empresariales.',
      tools: ['OpenAI API', 'LangChain', 'Python', 'RAG patterns'],
      workflow: 'Implementación de cadenas de procesamiento con LangChain: ingesta de documentos, chunking semántico, embeddings, recuperación aumentada (RAG) y generación de respuestas contextuales.',
      learnings: 'Comprensión profunda de patrones RAG, gestión de contextos largos, y optimización de prompts para resultados consistentes. Identificación de casos de uso empresarial reales para automatización con LLMs.',
      status: 'exploring'
    },
    {
      title: 'AI API Integration Patterns',
      description: 'Diseño e implementación de patrones de integración con APIs de IA para añadir capacidades inteligentes a aplicaciones existentes.',
      context: 'Necesidad de integrar capacidades de IA (clasificación, extracción de datos, generación) en aplicaciones backend existentes sin modificar la arquitectura principal.',
      tools: ['REST APIs', 'OpenAI API', 'Python', 'FastAPI', 'Docker'],
      workflow: 'Diseño de capa de abstracción de IA: wrapper de APIs de IA con rate limiting, caching, fallback strategies, y logging. Implementación de endpoints específicos para cada capacidad IA.',
      learnings: 'Importancia del diseño de APIs resilientes para servicios de IA, manejo de errores asíncronos, y patrones de retry para servicios externos de IA.',
      status: 'built'
    }
  ];
}
