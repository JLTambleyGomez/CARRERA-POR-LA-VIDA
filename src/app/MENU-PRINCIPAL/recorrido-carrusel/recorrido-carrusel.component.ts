import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recorrido-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recorrido-carrusel.component.html',
  styleUrl: './recorrido-carrusel.component.css'
})
export class RecorridoCarruselComponent {
  slides = [
    { src: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1719616634/Carrera%20Por%20La%20Vida%20Client/3_q7erlk.jpg', alt: 'Image 1' },
    { src: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1719616617/Carrera%20Por%20La%20Vida%20Client/7_karaof.jpg', alt: 'Image 2' },
    { src: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1719616600/Carrera%20Por%20La%20Vida%20Client/15_cvkrzk.jpg', alt: 'Image 3' }
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

}
