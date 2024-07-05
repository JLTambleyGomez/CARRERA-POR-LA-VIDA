import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-incripcion-me-inscribire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './incripcion-me-inscribire.component.html',
  styleUrl: './incripcion-me-inscribire.component.css'
})
export class IncripcionMeInscribireComponent implements OnInit {
  
  constructor(private router:Router){}
  
  currentUrl=""
  
  
  selectedDistanceIndex: number= 1;

  selectDistance(index: number) {
    this.selectedDistanceIndex = index;
  }

  handleInscribe() {
    let inscripcion = {
      tipo: "corredor-solo",
      distancia: 0,
      datosDelParticipante: "incompleto",
      kitDeportivo: "incompleto",
      productosOpcionales: "incompleto",
      preguntasDePatrocinadores: "incompleto"
    };
  
    if (this.selectedDistanceIndex === 1) {
      inscripcion.distancia = 7;
    } else if (this.selectedDistanceIndex === 0) {
      inscripcion.distancia = 3;
    } else if (this.selectedDistanceIndex === 2) {
      inscripcion.distancia = 15;
    }
  
    localStorage.setItem('inscripcion', JSON.stringify(inscripcion));
    this.router.navigateByUrl("/inscripcion-corredor");
  }
  

  distances: any[] = [
    { name: '3K', text: 'La carrera de 3k es una competición de 3 kilómetros, ideal para disfrutar en comunidad y apoyar una noble causa.', route: 'Recorrido 3K', image: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1719616634/Carrera%20Por%20La%20Vida%20Client/3_q7erlk.jpg' },
    { name: '7K', text: 'La Carrera de 7k es una competición de 7 kilómetros, ideal para disfrutar en comunidad y apoyar una noble causa.', route: 'Recorrido 7K', image: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1719616617/Carrera%20Por%20La%20Vida%20Client/7_karaof.jpg' },
    { name: '15K', text: 'La carrera de 15k es una competición de 15 kilómetros, ideal para disfrutar en comunidad y apoyar una noble causa.', route: 'Recorrido 15K', image: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1719616600/Carrera%20Por%20La%20Vida%20Client/15_cvkrzk.jpg' }
  ];

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
      
    });
  }


}
