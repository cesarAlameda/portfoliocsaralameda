import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isMenuOpen = false;
  isScrolled = false;
  activeSection = '';

  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI', href: '#ai-automation' },
    { label: 'Contact', href: '#contact' },
    { label: 'CV', href: '#', action: 'download' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const sections = this.navLinks
      .filter(l => l.action !== 'download')
      .map(l => l.href.substring(1));
    
    for (const sectionId of sections.reverse()) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          this.activeSection = sectionId;
          return;
        }
      }
    }
    this.activeSection = '';
  }

  handleNavClick(link: { label: string; href: string; action?: string }, event: Event) {
    event.preventDefault();
    this.isMenuOpen = false;

    if (link.action === 'download') {
      this.downloadCV();
    } else {
      this.scrollToSection(link.href.substring(1));
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const offsetTop = element.offsetTop - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }

  downloadCV() {
    const cvUrl = 'assets/CVCésarAlamedaBarquillo.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CVCésarAlamedaBarquillo.pdf';
    link.click();
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
