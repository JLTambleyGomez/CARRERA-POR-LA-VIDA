import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-form-de-insc-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-de-insc-equipo.component.html',
  styleUrls: ['./form-de-insc-equipo.component.css']
})
export class FormDeInscEquipoComponent implements OnInit {
  currentUrl: any;
  selectedDistance: any;
  datosDeParticipantes: any;
  MikitDeportivo: any;
  preguntasDePatrocinadores: any;
  productosOpcionales: any;
  isFormComplete: boolean = false;
  showModal: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadFormData();

    // Redirigir si no hay inscripción en el localStorage
    if (Object.keys(this.loadFormData()).length === 0) {
      this.router.navigateByUrl("/subscribe-team");
      return;
    }

    this.checkFormCompletion();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  loadFormData() {
    const ls = JSON.parse(localStorage.getItem('inscripcionEquipo') || '{}');
    this.selectedDistance = ls.distancia;
    this.datosDeParticipantes = ls.datosDeParticipantes;
    this.MikitDeportivo = ls.MikitDeportivo;
    this.preguntasDePatrocinadores = ls.preguntasDePatrocinadores;
    this.productosOpcionales = ls.productosOpcionales;
    return ls;
  }

  checkFormCompletion() {
    const ls = this.loadFormData();
    if (ls.datosDeParticipantes === 'completo' &&
        ls.MikitDeportivo === 'completo' &&
        ls.preguntasDePatrocinadores === 'completo' &&
        ls.productosOpcionales === 'completo') {
      this.isFormComplete = true;
    } else {
      this.isFormComplete = false;
    }
  }
  goBack() {
    this.router.navigateByUrl("/subscribe-team");
  }

  handleDatosDelPaticipante() {
    this.showModal = true;
  }

  confirmDatosDelPaticipante() {
    this.showModal = false;
    this.router.navigateByUrl("/formulario-de-inscripción-de-equipo");
  }

  handleKitDeportivo() {
    this.router.navigateByUrl("/kitdeportivo");
  }

  handleAgregarProductos() {
    this.router.navigateByUrl("/tienda-vi");
  }

  handlePreguntasPatrocinadores() {
    this.router.navigateByUrl("/Preguntas-Patrocinadores");
  }

  continueWithPayment() {
    if (this.isFormComplete) {
      this.router.navigateByUrl("/login");
    }
  }
}
