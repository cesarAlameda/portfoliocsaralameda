import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  email = 'cesaralamedabarquillo@gmail.com';
  linkedinUrl = 'https://www.linkedin.com/in/césar-alameda-barquillo-b059882b0';
  githubUrl = 'https://github.com/cesarAlameda';
}
