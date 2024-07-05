import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datos-del-participante',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './datos-del-participante.component.html',
  styleUrls: ['./datos-del-participante.component.css']
})
export class DatosDelParticipanteComponent implements OnInit {

  participanteForm: FormGroup;
  localStorageKey = 'datosDelParticipante';
  currentUrl = "";
  departaments: any[] = [];
  cities: any[] = [];
  filteredCities: any[] = [];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router) {
    this.participanteForm = this.fb.group({
      name: ['', Validators.required],
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      eps: ['', Validators.required],
      rh: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue]
    });

    const savedData = localStorage.getItem(this.localStorageKey);
    if (savedData) {
      this.participanteForm.patchValue(JSON.parse(savedData));
    }
  }

  back() {
    this.onSubmit();
    this.router.navigateByUrl("/inscripcion-corredor");
  }
  
  terms() {
    this.router.navigateByUrl("/terminos-condiciones");
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
    this.participanteForm.valueChanges.subscribe(values => {
      this.saveToLocalStorage(values);
    });

    // Cargar departamentos
    this.http.get('http://lacarreraporlavida.org:8000/api/departments').subscribe({
      next: (response: any) => {
        console.log('departamentos', response);
        this.departaments = response;
      },
      error: error => {
        console.error('Error en la carga de departamentos', error);
      },
      complete: () => {
        console.log('Solicitud de departamentos completada');
      }
    });

    // Cargar ciudades
    this.http.get('http://lacarreraporlavida.org:8000/api/cities').subscribe({
      next: (response: any) => {
        console.log('ciudades', response);
        this.cities = response;
      },
      error: error => {
        console.error('Error en la carga de ciudades', error);
      },
      complete: () => {
        console.log('Solicitud de ciudades completada');
      }
    });
  }

  saveToLocalStorage(values: any): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(values));
  }

  onSubmit(): void {
    if (this.participanteForm.valid) {
      this.router.navigateByUrl("/inscripcion-corredor");

      const inscripcion = JSON.parse(localStorage.getItem('inscripcion') || '{}');
      inscripcion.datosDelParticipante = 'completo';

      localStorage.setItem('inscripcion', JSON.stringify(inscripcion));
      console.log('Formulario enviado:', this.participanteForm.value);
    } else {
      const inscripcion = JSON.parse(localStorage.getItem('inscripcion') || '{}');
      inscripcion.datosDelParticipante = 'incompleto';

      localStorage.setItem('inscripcion', JSON.stringify(inscripcion));
      console.log('El formulario no es válido. Por favor, complete todos los campos.');
    }
  }

  onStateChange(event: any): void {
    const selectedStateId = +event.target.value;
    this.filteredCities = this.cities.filter(city => city.departmentId === selectedStateId);
  }
}
