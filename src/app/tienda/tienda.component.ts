import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaProductosCarruselComponent } from '../tienda-productos-carrusel/tienda-productos-carrusel.component';
@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule,TiendaProductosCarruselComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {
  showMenProducts:boolean = false;
  showWmenProducts:boolean = false;

  handleShowMenProducts(){
    this.showMenProducts=!this.showMenProducts;
  };

  handleShowWmenProducts(){
    this.showWmenProducts=!this.showWmenProducts
  }

}
