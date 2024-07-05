import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-preguntas-patrocinadores',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preguntas-patrocinadores.component.html',
  styleUrls: ['./preguntas-patrocinadores.component.css']
})
export class PreguntasPatrocinadoresComponent implements OnInit {
  preguntasForm: FormGroup;
  localStorageKey = 'respuestasPatrocinadores';
  showModal: boolean = false;
  showIncompleteModal: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private location: Location) {
    this.preguntasForm = this.fb.group({
      caracteristicasZapatos: ['', Validators.required],
      tenisCarrera: ['', Validators.required],
      otraPregunta: ['', Validators.required]
    });

    const savedData = localStorage.getItem(this.localStorageKey);
    if (savedData) {
      this.preguntasForm.setValue(JSON.parse(savedData));
    }
  }

  ngOnInit(): void {
    this.preguntasForm.valueChanges.subscribe(values => {
      this.saveToLocalStorage(values);
    });
  }

  saveToLocalStorage(values: any): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(values));
  }

  onSubmit(): void {
    if (this.preguntasForm.valid) {
      if (localStorage.getItem('inscripcionEquipo')) {
        const inscripcion = JSON.parse(localStorage.getItem('inscripcionEquipo') || '{}');
        inscripcion.preguntasDePatrocinadores = 'completo';
        localStorage.setItem('inscripcionEquipo', JSON.stringify(inscripcion));
        this.showModal = true;
      } else if (localStorage.getItem('inscripcion')) {
        const inscripcion = JSON.parse(localStorage.getItem('inscripcion') || '{}');
        inscripcion.preguntasDePatrocinadores = 'completo';
        localStorage.setItem('inscripcion', JSON.stringify(inscripcion));
        this.showModal = true;
      }
    } else {
      this.showIncompleteModal = true;
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.location.back();
  }

  closeIncompleteModal(): void {
    this.showIncompleteModal = false;
  }

  goBack(): void {
    this.location.back();
  }

  close(): void {
    this.location.back();
  }

  omit(): void {
    if (localStorage.getItem('inscripcionEquipo')) {
      const inscripcion = JSON.parse(localStorage.getItem('inscripcionEquipo') || '{}');
      inscripcion.preguntasDePatrocinadores = 'completo';
      localStorage.setItem('inscripcionEquipo', JSON.stringify(inscripcion));
    } else if (localStorage.getItem('inscripcion')) {
      const inscripcion = JSON.parse(localStorage.getItem('inscripcion') || '{}');
      inscripcion.preguntasDePatrocinadores = 'completo';
      localStorage.setItem('inscripcion', JSON.stringify(inscripcion));
    }
    this.location.back();
  }
}
