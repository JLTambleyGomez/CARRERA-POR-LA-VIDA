import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location, CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-compras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {
  purchases = [
    {
      date: '25-04-2024',
      description: 'Inscripción 7k (incluye camiseta y rastreador) + visera y pañoleta.',
      total: 141000,
      detail: {
        participantInfo: 'Nombre: Carlos Sanchez, Cédula: 1049409241',
        items: [
          { description: 'Inscripción 7k', amount: 42000 },
          { description: 'Camiseta Talla L', amount: 60000 },
          { description: 'Visera', amount: 30000 },
          { description: 'Pañoleta', amount: 15000 },
          { description: 'Descuento inscripción 20%', amount: -24000 },
        ],
        paymentInfo: {
          method: 'Transferencia vía PSE',
          amount: 141000,
          date: '26/04/2024',
          reference: '#432254',
          status: 'Pago aprobado',
          logoUrl: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717254558/Carrera%20Por%20La%20Vida%20Client/removal.ai__f4ff7602-0fdd-45c1-9727-0f42a1ea8881-whatsapp-image-2024-06-01-at-11-08-51-am_rruvif.png'
        }
      }
    }
  ];

  selectedPurchase: any = null;

  constructor(private router: Router, private  location:Location) {}

  ngOnInit(): void {}

  selectPurchase(purchase: any): void {
    this.selectedPurchase = purchase;
  }




  goBack(): void {
    if (this.selectedPurchase) {
      this.selectedPurchase = null;
    } else {
      this.location.back();
    }
  }
}
