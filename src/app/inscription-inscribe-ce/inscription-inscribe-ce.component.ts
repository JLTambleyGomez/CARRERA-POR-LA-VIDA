import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription-inscribe-ce',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inscription-inscribe-ce.component.html',
  styleUrl: './inscription-inscribe-ce.component.css'
})
export class InscriptionInscribeCeComponent {
  selectedDistanceIndex: number= 0;

  selectDistance(index: number) {
    this.selectedDistanceIndex = index;
  }

  distances: any[] = [
    { name: '7K', text: 'La inscripción de 7k incluye camiseta y rastreador', route: 'Recorrido 7K', image: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717171276/Carrera%20Por%20La%20Vida%20Client/loit_vmbwin.png' },
    { name: '15K', text: 'Texto para 15K', route: 'Recorrido 15K', image: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717171276/Carrera%20Por%20La%20Vida%20Client/loit_vmbwin.png' }
  ];



}
