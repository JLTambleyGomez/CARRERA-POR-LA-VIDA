import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  socialUser: SocialUser = new SocialUser();
  isLoggedin: boolean = false;
  showErrorModal: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: SocialAuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      if (this.isLoggedin) {
        const userData = {
          name: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: '', 
          password: '' 
        };
        console.log(userData);
        localStorage.setItem('usuario', JSON.stringify(userData));
      }
    });
  }

  handleRegister(){
    this.router.navigateByUrl("/register")
  }

  feedbackInicio(){
    this.router.navigateByUrl("/feedback-inicio")
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log(loginData);
      this.http.post('http://lacarreraporlavida.org:8000/api/auth/login', loginData).subscribe({
        next: response => {
          console.log('Inicio de sesión exitoso', response);
          localStorage.setItem('usuario', JSON.stringify(response)); 
          this.feedbackInicio();
        },
        error: error => {
          console.error('Error en el inicio de sesión', error);
          this.errorMessage = this.translateErrorMessage(error.error.message);
          this.showErrorModal = true;
        },
        complete: () => {
          console.log('Solicitud de inicio de sesión completada');
        }
      });
    }
  }

  translateErrorMessage(message: string): string {
    const translations: { [key: string]: string } = {
      'User does not exist': 'El usuario no existe',
      'Wrong password': 'Contraseña incorrecta',
    };
    return translations[message] || 'Error desconocido';
  }

  closeModal() {
    this.showErrorModal = false;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      const userData = {
        name: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: '',
        password: ''
      };
      localStorage.setItem('usuario', JSON.stringify(userData));
      this.feedbackInicio();
    });
  }

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      const userData = {
        name: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: '',
        password: ''
      };
      localStorage.setItem('usuario', JSON.stringify(userData)); 
      this.feedbackInicio();
    });
  }

  signOut(): void {
    this.authService.signOut().then(() => {
      localStorage.removeItem('usuario');
    });
  }
}
