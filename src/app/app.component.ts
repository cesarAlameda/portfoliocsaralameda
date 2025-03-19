import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component'; //EJEMPLO DE IMPORT 
import { NavComponent } from './nav/nav.component'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactComponent,NavComponent], //IMPORTO TODOS LOS COMPONENTES
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfoliocsaralameda'; 
}