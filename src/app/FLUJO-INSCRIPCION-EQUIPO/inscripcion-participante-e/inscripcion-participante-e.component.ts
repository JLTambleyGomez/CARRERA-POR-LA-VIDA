import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inscripcion-participante-e',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscripcion-participante-e.component.html',
  styleUrls: ['./inscripcion-participante-e.component.css']
})
export class InscripcionParticipanteEComponent implements OnInit {
  participanteForm: FormGroup;
  localStorageKey = 'datosDePaticipantesEquipo';
  currentUrl = "";
  participantIndex: number = 0;
  showModal: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.participanteForm = this.fb.group({
      fullName: ['', Validators.required],
      idNumber: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      isDonatingBlood: [false]
    });

    this.route.params.subscribe(params => {
      this.participantIndex = +params['index'];
    });

    const savedData = JSON.parse(localStorage.getItem(this.localStorageKey) || '{}');
    if (savedData.participants && savedData.participants[this.participantIndex]) {
      this.participanteForm.patchValue(savedData.participants[this.participantIndex]);
    }
  }

  ngOnInit(): void {
    this.participanteForm.valueChanges.subscribe(values => {
      this.saveToLocalStorage(values);
    });
  }

  saveToLocalStorage(values: any): void {
    const savedData = JSON.parse(localStorage.getItem(this.localStorageKey) || '{}');
    if (!savedData.participants) {
      savedData.participants = [];
    }
    savedData.participants[this.participantIndex] = {
      ...savedData.participants[this.participantIndex],
      ...values,
      status: this.participanteForm.valid ? 'completo' : 'incompleto'
    };
    localStorage.setItem(this.localStorageKey, JSON.stringify(savedData));
  }

  onSubmit(): void {
    if (this.participanteForm.valid) {
      const savedData = JSON.parse(localStorage.getItem(this.localStorageKey) || '{}');
      savedData.participants[this.participantIndex].status = 'completo';
      localStorage.setItem(this.localStorageKey, JSON.stringify(savedData));
      this.showModal = true;
      console.log('Formulario enviado:', this.participanteForm.value);
    } else {
      console.log('El formulario no es válido. Por favor, complete todos los campos.');
    }
  }

  closeModal() {
    this.showModal = false;
    this.router.navigateByUrl("/formulario-de-inscripción-de-equipo");
  }

  handleBack() {
    this.router.navigateByUrl("/formulario-de-inscripción-de-equipo");
  }
}
