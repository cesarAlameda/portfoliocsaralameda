import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Output() skillSelected = new EventEmitter<string>();

  skills = [
    { name: 'Java', image: 'assets/java.png' },
    { name: 'C#', image: 'assets/csharp.png' },
    { name: 'PHP', image: 'assets/php.png' },
    { name: 'JavaScript', image: 'assets/javascript.png' },
    { name: 'Python', image: 'assets/python.png' }
  ];

  selectSkill(skill: string): void {
    this.skillSelected.emit(skill);
  }
}