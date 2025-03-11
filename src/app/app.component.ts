import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component'; // Importa el ContactComponent
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactComponent], // Asegúrate de importar ContactComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfoliocsaralameda'; // Propiedad del título
}