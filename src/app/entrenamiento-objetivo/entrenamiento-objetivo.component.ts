import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entrenamiento-objetivo',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Añade FormsModule a la lista de imports
  templateUrl: './entrenamiento-objetivo.component.html',
  styleUrls: ['./entrenamiento-objetivo.component.css']
})
export class EntrenamientoObjetivoComponent implements OnInit {
  daysUntilEvent = 30;
  selectedOption = 'objetivo';

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  goBack(): void {
    this.location.back();
  }

  continue(): void {
    this.router.navigate(['/entrenamiento-calorias']);
  }
}
