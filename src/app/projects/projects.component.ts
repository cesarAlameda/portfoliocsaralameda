import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

interface Project {
  titulo: string;
  descripcion: string;
  imagen: string;
  skill: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() selectedSkill: string = '';
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  currentProjectIndex: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.http.get<Project[]>('/assets/projects.json').subscribe(data => {
      this.projects = data;
      this.filterProjects();
    });
  }

  ngOnChanges(): void {
    this.filterProjects();
    this.currentProjectIndex = 0;
  }

  filterProjects(): void {
    this.filteredProjects = this.selectedSkill 
      ? this.projects.filter(p => p.skill === this.selectedSkill)
      : [...this.projects];
  }

  nextProject(): void {
    this.currentProjectIndex = 
      (this.currentProjectIndex + 1) % this.filteredProjects.length;
  }

  previousProject(): void {
    this.currentProjectIndex = 
      (this.currentProjectIndex - 1 + this.filteredProjects.length) % this.filteredProjects.length;
  }
}