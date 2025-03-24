import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component'; 
import { NavComponent } from './nav/nav.component'; 
import { AboutmeComponent } from './aboutme/aboutme.component'; 
import { SkillsComponent } from './skills/skills.component'; 
import { ProjectsComponent } from "./projects/projects.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    ContactComponent, 
    AboutmeComponent, 
    NavComponent, 
    SkillsComponent, 
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfoliocsaralameda';
  selectedSkill: string = ''; // <-- Añade esta propiedad
}