import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kit-deportivo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './kit-deportivo.component.html',
  styleUrls: ['./kit-deportivo.component.css']
})
export class KitDeportivoComponent implements OnInit {

  products:any=[]
  kitForm: FormGroup;
  localStorageKey = 'kitDeportivo';

  constructor(private fb: FormBuilder, private router: Router,  
    private http: HttpClient, private location: Location) {
    
    
      this.kitForm = this.fb.group({
      gender: ['hombre', Validators.required],
      size: ['', Validators.required]
    });

    const savedData = localStorage.getItem(this.localStorageKey);
    if (savedData) {
      this.kitForm.setValue(JSON.parse(savedData));
    }
  }

  back(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.kitForm.valueChanges.subscribe(values => {
      this.saveToLocalStorage(values);
    });

      // Cargar departamentos
      this.http.get('http://lacarreraporlavida.org:8000/api/products').subscribe({
        next: (response: any) => {
          console.log('products', response);
          this.products = response;
        },
        error: error => {
          console.error('Error en la carga de products', error);
        },
        complete: () => {
          console.log('Solicitud de products completada');
        }
      });

  }

  selectSize(size: string): void {
    this.kitForm.get('size')?.setValue(size);
  }

  saveToLocalStorage(values: any): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(values));
  }

  handleGuiaDeTallas() {
    this.router.navigateByUrl("/guiadetallas");
  }

  onSubmit(): void {
    if (localStorage.getItem('inscripcionEquipo')) {
      if (this.kitForm.valid) {
        const inscripcion = JSON.parse(localStorage.getItem('inscripcionEquipo') || '{}');
        inscripcion.MikitDeportivo = 'completo';
        localStorage.setItem('inscripcionEquipo', JSON.stringify(inscripcion));
        console.log('Formulario enviado:', this.kitForm.value);
        this.router.navigateByUrl("/inscribir-equipo");
      } else {
        const inscripcion = JSON.parse(localStorage.getItem('inscripcionEquipo') || '{}');
        inscripcion.MikitDeportivo = 'incompleto';
        localStorage.setItem('inscripcionEquipo', JSON.stringify(inscripcion));
        console.log('El formulario no es válido. Por favor, complete todos los campos.');
      }
    } else if (localStorage.getItem('inscripcion')) {
      if (this.kitForm.valid) {
        const inscripcion = JSON.parse(localStorage.getItem('inscripcion') || '{}');
        inscripcion.kitDeportivo = 'completo';
        localStorage.setItem('inscripcion', JSON.stringify(inscripcion));
        console.log('Formulario enviado:', this.kitForm.value);
        this.router.navigateByUrl("/inscripcion-corredor");
      } else {
        const inscripcion = JSON.parse(localStorage.getItem('inscripcion') || '{}');
        inscripcion.kitDeportivo = 'incompleto';
        localStorage.setItem('inscripcion', JSON.stringify(inscripcion));
        console.log('El formulario no es válido. Por favor, complete todos los campos.');
      }
    }
  }
}
