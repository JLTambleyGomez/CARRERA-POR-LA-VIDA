import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MODALQUEFALTAComponent } from './MODAL-QUE-FALTA-/modal-que-falta/modal-que-falta.component';
import { TopbarComponent } from './topbar/topbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopbarComponent,MODALQUEFALTAComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CARRERA-POR-LA-VIDA-CLIENT';
}
