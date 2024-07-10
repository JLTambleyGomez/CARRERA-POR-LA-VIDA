import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api-service.service';
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


  get subtotal() {
    return this.purchaseDetails.reduce((sum, item) => sum + item.amount, 0);
  }

  get total() {
    return this.subtotal ;
  }

  constructor(private router: Router, private http: HttpClient, private apiService:ApiService) {}



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
      const userId = user.userId;
      const value = this.total;
      const token = user.token;

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      const body = { userId, value };

      this.apiService.wompiPayment(body).subscribe({
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
