import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-form-mi-inscripcion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-mi-inscripcion.component.html',
  styleUrls: ['./form-mi-inscripcion.component.css']
})
export class FormMiInscripcionComponent implements OnInit {
  participanteForm: FormGroup;
  localStorageKey = 'datos-mi-inscripcion';
  currentUrl = "";

  constructor(private fb: FormBuilder, private router: Router) {
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
    this.router.navigateByUrl("/formulario-de-inscripción-de-equipo");
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
  }

  saveToLocalStorage(values: any): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(values));
  }

  onSubmit(): void {
    if (this.participanteForm.valid) {
      const inscripcion = JSON.parse(localStorage.getItem('datosDePaticipantesEquipo') || '{}');
      inscripcion.datosDelParticipante = 'completo';
      localStorage.setItem('datosDePaticipantesEquipo', JSON.stringify(inscripcion));

      console.log('Formulario enviado:', this.participanteForm.value);
      this.router.navigateByUrl("/formulario-de-inscripción-de-equipo");
    } else {
      const inscripcion = JSON.parse(localStorage.getItem('datosDePaticipantesEquipo') || '{}');
      inscripcion.datosDelParticipante = 'incompleto';
      localStorage.setItem('datosDePaticipantesEquipo', JSON.stringify(inscripcion));

      console.log('El formulario no es válido. Por favor, complete todos los campos.');
    }
  }
}
