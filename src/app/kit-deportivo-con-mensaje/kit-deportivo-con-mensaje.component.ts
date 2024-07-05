import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-kit-deportivo-con-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './kit-deportivo-con-mensaje.component.html',
  styleUrl: './kit-deportivo-con-mensaje.component.css'
})
export class KitDeportivoConMensajeComponent {
  constructor(private location: Location) {}

  variable:string="variable"

  funcion(){
    alert("alerta")
  }
  back(): void {
    this.location.back();
  }
}
