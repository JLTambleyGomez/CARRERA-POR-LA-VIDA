import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {WompipaymentComponent} from "../wompipayment/wompipayment.component"
import { ApiService } from '../../api-service.service';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [CommonModule, FormsModule,WompipaymentComponent],
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  user:any={}


  purchaseDetails = [
    { description: 'Inscripción', amount: 50000 },
    { description: 'Camiseta Talla L (con módulo)', amount: 60000 },
  ];


  total = this.purchaseDetails.reduce((sum, item) => sum + item.amount, 0) 

  constructor(private router: Router, private apiServide:ApiService) {}

  ngOnInit(): void {
      
   this.apiServide.getUserData().subscribe({
      next: userData => {
        this.user = userData;
      },  
      error: error => {
        console.error('Error fetching user data', error);
      }
    });
  
  }




  cancel() {
    this.router.navigate(['/']);
  }

  pay() {
    // Aquí puedes manejar la lógica de procesamiento de pago
    console.log('Pago procesado');
    this.router.navigate(['/payment-processing']);
  }
}
