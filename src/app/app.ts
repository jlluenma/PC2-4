import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InicioComponent } from './Components/inicio.component/inicio.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InicioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pregunta4');
}
