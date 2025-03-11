import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations'; // Opcional: si usas animaciones

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // Opcional: si usas animaciones
  ],
}).catch((err) => console.error(err));