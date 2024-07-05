import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, { validator: this.checkPasswords });
  }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe(val => {
      console.log('Form changes', val);
    });

    Object.keys(this.registerForm.controls).forEach(controlName => {
      this.registerForm.controls[controlName].valueChanges.subscribe(value => {
        console.log(`${controlName} value changes`, value);
      });
    });
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls['password'].value;
    let confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit() {
    console.log("submit")
    if (true) {
      alert("register")
      this.http.post('http://lacarreraporlavida.org:8000/api/users', this.registerForm.value).subscribe({
        next: response => {
          console.log('Registro exitoso', response);
          // Manejar la respuesta del backend
        },
        error: error => {
          console.error('Error en el registro', error);
          alert("error-sin-conexion-api")
          // Manejar el error del backend
        },
        complete: () => {
          console.log('Solicitud de registro completada');
        }
      });
    }else console.log("formInvalido")
  }
}
