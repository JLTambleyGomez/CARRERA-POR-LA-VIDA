import { Component } from '@angular/core';
import { EventoComponent } from './evento/evento.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EventoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CARRERA-POR-LA-VIDA-CLIENT';
}
