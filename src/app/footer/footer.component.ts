import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  contactInfo = {
    email: 'cesaralamedabarquillo@gmail.com',
  };

  currentYear = new Date().getFullYear();
}