import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-entrenamiento-calorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entrenamiento-calorias.component.html',
  styleUrls: ['./entrenamiento-calorias.component.css']
})
export class EntrenamientoCaloriasComponent {
  selectedOption: string = 'calories';
  altura: number | null = null;
  peso: number | null = null;
  inputsFilled: boolean = false;

  constructor(private router: Router, private location: Location) {}

  checkInputs() {
    this.inputsFilled = this.altura !== null && this.peso !== null && this.altura > 0 && this.peso > 0;
  }

  continue() {
    // Lógica para continuar a la siguiente pantalla
    console.log('Continuar');
  }

  goBack() {
    this.location.back();
  }
}
