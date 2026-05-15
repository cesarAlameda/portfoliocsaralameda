import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component'; 
import { NavComponent } from './nav/nav.component'; 
import { AboutmeComponent } from './aboutme/aboutme.component'; 
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { AiAutomationComponent } from './ai-automation/ai-automation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ContactComponent,
    AboutmeComponent,
    NavComponent,
    ProjectsComponent,
    FooterComponent,
    HeroComponent,
    ExperienceComponent,
    TechStackComponent,
    AiAutomationComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfoliocsaralameda';
}
