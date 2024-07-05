import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-inscripcion-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inscripcion-equipo.component.html',
  styleUrl: './inscripcion-equipo.component.css'
})
export class InscripcionEquipoComponent implements OnInit {
  
  constructor(private router:Router){}
  
  currentUrl=""
  
  
  selectedDistanceIndex: number= 1;

  selectDistance(index: number) {
    this.selectedDistanceIndex = index;
  }

  handleInscribe() {
    let inscripcion = {
      tipo: "equipo",
      distancia: 0,
      datosDeParticipantes: "incompleto",
      MikitDeportivo: "incompleto",
      productosOpcionales: "incompleto",
      preguntasDePatrocinadores: "incompleto"
    };
  
   if (this.selectedDistanceIndex === 0) {
      inscripcion.distancia = 7;
    } else if (this.selectedDistanceIndex === 1) {
      inscripcion.distancia = 15;
    }
  
    localStorage.setItem('inscripcionEquipo', JSON.stringify(inscripcion));
    this.router.navigateByUrl("/inscribir-equipo");
  }
  

  distances: any[] = [
    { name: '7K', text: 'La inscripción de 7k incluye camiseta y rastreador', route: 'Recorrido 7K', image: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717171276/Carrera%20Por%20La%20Vida%20Client/loit_vmbwin.png' },
    { name: '15K', text: 'Texto para 15K', route: 'Recorrido 15K', image: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717171276/Carrera%20Por%20La%20Vida%20Client/loit_vmbwin.png' }
  ];

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
      
    });
  }


}
