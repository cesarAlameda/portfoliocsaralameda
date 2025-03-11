import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component'; // Importa el ContactComponent

export const routes: Routes = [
  { path: '', component: AppComponent }, // Ruta raíz
  { path: 'contact', component: ContactComponent }, // Ruta para el contacto
];