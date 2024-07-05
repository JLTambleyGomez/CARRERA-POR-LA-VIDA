import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wompipayment',
  standalone: true,
  templateUrl: './wompipayment.component.html',
  styleUrls: ['./wompipayment.component.css'],
  imports: [CommonModule] 
})
export class WompipaymentComponent implements OnInit {
  paymentData: any;

  ngOnInit() {
    const storedPaymentData = localStorage.getItem('paymentResponse');
    if (storedPaymentData) {
      this.paymentData = JSON.parse(storedPaymentData);
      console.log('Payment Data:', this.paymentData);
    } else {
      console.error('No se encontró la respuesta de pago en localStorage');
      alert('No se encontró la respuesta de pago, por favor intente nuevamente.');
    }
  }
}
