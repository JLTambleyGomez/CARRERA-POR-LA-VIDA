import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-terminos-y-condiciones',
  standalone: true,
  imports: [],
  templateUrl: './terminos-y-condiciones.component.html',
  styleUrl: './terminos-y-condiciones.component.css'
})
export class TerminosYCondicionesComponent {
  constructor(private location: Location) {}

  back() {
    this.location.back();
  }
}
