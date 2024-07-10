import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finalize-purchase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finalize-purchase.component.html',
  styleUrls: ['./finalize-purchase.component.css']
})
export class FinalizePurchaseComponent implements OnInit {

  user:any={}
  inscription:any={}
  kitdeportivo:any={}

  purchaseDetails = [
    { description: 'Inscripción 7K', amount: 42000 },

  ];

  discountDetails = 'Obtén un 20% de descuento en la inscripción donando sangre';
  donationAmount = this.purchaseDetails[0].amount * 0.2;

  get subtotal() {
    return this.purchaseDetails.reduce((sum, item) => sum + item.amount, 0);
  }

  get total() {
    return this.subtotal - this.donationAmount;
  }

  constructor(private router: Router, private http: HttpClient) {}



ngOnInit(): void {
        const storedUser = localStorage.getItem('usuario');
  if(storedUser){
    const user = JSON.parse(storedUser);

    this.user=user
  }

  const storedInscription = localStorage.getItem('inscripcion');
  if(storedInscription){
    const inscripcion = JSON.parse(storedInscription);

    this.inscription=inscripcion
  }

  const storedKit = localStorage.getItem('kitDeportivo');
  if(storedKit){
    const kit = JSON.parse(storedKit);

    this.kitdeportivo=kit
  }

}







  cancel() {
    this.router.navigate(['/']);
  }

  continue() {
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const userId = user.userToken.userId;
      const value = this.total;
      const token = user.token;

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      const body = { userId, value };

      this.http.post('http://lacarreraporlavida.org:8000/api/payments/wompi', body, { headers }).subscribe({
        next: response => {
          console.log('Pago exitoso', response);
          localStorage.setItem('paymentResponse', JSON.stringify(response)); 
          this.router.navigate(['/payment-details']);
        },
        error: error => {
          console.error('Error en el pago', error);
          alert("error-sin-conexion-api");
        },
        complete: () => {
          console.log('Solicitud de pago completada');
        }
      });
    } else {
      console.error('No se encontró el usuario en localStorage');
      alert('Por favor, inicia sesión antes de continuar.');
    }
  }

  donate() {
    alert('¡Gracias por tu interés en donar!');
  }
}
