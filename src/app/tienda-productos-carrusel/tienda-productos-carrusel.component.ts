import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tienda-productos-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tienda-productos-carrusel.component.html',
  styleUrl: './tienda-productos-carrusel.component.css'
})
export class TiendaProductosCarruselComponent {
  slides = [
    { src: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717095951/Carrera%20Por%20La%20Vida%20Client/OIG3_dsynka.jpg', alt: 'Image 1', text: 'Talla S (pecho 89cm, cintura 77cm)', talla:"Talla S", valor: 30000},
    { src: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717095951/Carrera%20Por%20La%20Vida%20Client/OIG3_dsynka.jpg', alt: 'Image 2', text: 'Talla M (pecho 94cm, cintura 82cm)' , talla:"Talla M", valor: 40000},
    { src: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717095951/Carrera%20Por%20La%20Vida%20Client/OIG3_dsynka.jpg', alt: 'Image 3', text: 'Talla L (pecho 99cm, cintura 87cm)' , talla:"Talla L", valor: 45000},
    { src: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717095951/Carrera%20Por%20La%20Vida%20Client/OIG3_dsynka.jpg', alt: 'Image 4', text: 'Talla XL (pecho 104cm, cintura 92cm)', talla:"Talla XL", valor: 50000 }
  ];

  showComponent=true
  currentSlide = 0;
  itemsCount: number = 0;
  totalValue: number = 0;


  handleShow(){
    this.showComponent=!this.showComponent;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  addItem() {
    this.itemsCount++;
    this.totalValue += this.slides[this.currentSlide].valor;
  }

  unAddItem() {
    if (this.itemsCount > 0) {
      this.itemsCount--;
      this.totalValue -= this.slides[this.currentSlide].valor;
    }
  }
}
