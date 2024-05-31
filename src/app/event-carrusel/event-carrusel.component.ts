import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-carrusel.component.html',
  styleUrl: './event-carrusel.component.css'
})
export class EventCarruselComponent {
  slides = [
    { src: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717095943/Carrera%20Por%20La%20Vida%20Client/OIG3_exac7d.jpg', alt: 'Image 1', price: '$100' },
    { src: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717095949/Carrera%20Por%20La%20Vida%20Client/OIG3_lfgflm.jpg', alt: 'Image 2', price: '$200' },
    { src: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717095951/Carrera%20Por%20La%20Vida%20Client/OIG3_dsynka.jpg', alt: 'Image 3', price: '$300' }
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
