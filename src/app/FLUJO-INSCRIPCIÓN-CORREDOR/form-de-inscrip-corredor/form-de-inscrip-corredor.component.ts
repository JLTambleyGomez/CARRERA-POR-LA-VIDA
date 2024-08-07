import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-form-de-inscrip-corredor',
  templateUrl: './form-de-inscrip-corredor.component.html',
  styleUrls: ['./form-de-inscrip-corredor.component.css']
})
export class FormDeInscripCorredorComponent implements OnInit {
  currentUrl: any;
  selectedDistance: any;
  datosDelParticipante: any;
  kitDeportivo: any;
  preguntasDePatrocinadores: any;
  productosOpcionales: any;
  codigoVendedor: string = '';
  isFormComplete: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadFormData();

    // Redirigir si no hay inscripción en el localStorage
    if (Object.keys(this.loadFormData()).length === 0) {
      this.router.navigateByUrl("/subscribe-me");
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
    const ls = JSON.parse(localStorage.getItem('inscripcion') || '{}');
    this.selectedDistance = ls.distancia;
    this.datosDelParticipante = ls.datosDelParticipante;
    this.kitDeportivo = ls.kitDeportivo;
    this.preguntasDePatrocinadores = ls.preguntasDePatrocinadores;
    this.productosOpcionales = ls.productosOpcionales;
    this.codigoVendedor = ls.codigoVendedor || '';
    return ls;
  }

  checkFormCompletion() {
    const ls = this.loadFormData();
    if (ls.datosDelParticipante === 'completo' &&
        ls.kitDeportivo === 'completo' &&
        ls.preguntasDePatrocinadores === 'completo' &&
        ls.productosOpcionales === 'completo') {
      this.isFormComplete = true;
    } else {
      this.isFormComplete = false;
    }
  }

  handleDatosDelPaticipante() {
    this.router.navigateByUrl("/datosdelparticipante");
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

  updateCodigoVendedor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.codigoVendedor = input.value;
    const inscripcion = JSON.parse(localStorage.getItem('inscripcion') || '{}');
    inscripcion.codigoVendedor = this.codigoVendedor;
    localStorage.setItem('inscripcion', JSON.stringify(inscripcion));
  }

  continueWithPayment() {
    if (this.isFormComplete) {
      this.router.navigateByUrl("/finalize-purchase");
    }
  }
}
