import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {WompipaymentComponent} from "../wompipayment/wompipayment.component"

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [CommonModule, FormsModule,WompipaymentComponent],
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent {
  participantDetails = {
    name: 'Carlos Sanchez',
    id: 'Cédula 450764',
    email: 'carlos@gmail.com',
    phone: '3000000000'
  };

  purchaseDetails = [
    { description: 'Inscripción', amount: 50000 },
    { description: 'Camiseta Talla L (con módulo)', amount: 60000 },
  ];

  discountDetails = 'Obtén un 10% de descuento en la inscripción donando sangre';
  donationAmount = 45000;

  total = this.purchaseDetails.reduce((sum, item) => sum + item.amount, 0) - this.donationAmount;

  banks = ['Davivienda', 'Bancolombia', 'BBVA', 'Banco de Bogotá'];
  selectedBank = '';
  selectedMethod = '';

  constructor(private router: Router) {}

  cancel() {
    this.router.navigate(['/']);
  }

  pay() {
    // Aquí puedes manejar la lógica de procesamiento de pago
    console.log('Pago procesado');
    this.router.navigate(['/payment-processing']);
  }
}
