import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCarruselComponent } from '../event-carrusel/event-carrusel.component';
import { EventoMenuComponent } from '../../MENU-DESPLEGABLE-FLUJO/evento-menu/evento-menu.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule,EventCarruselComponent,EventoMenuComponent],
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

constructor(private router:Router){}


currentUrl:string=""



clearLocalStorageExceptUsuario() {
  const usuario = localStorage.getItem("usuario");
  const token= localStorage.getItem("token");

  localStorage.clear();
  
  if (usuario !== null&& token!==null) {
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("token", token);

  }
}

handleSubscribe(){
  
  this.clearLocalStorageExceptUsuario();
  this.router.navigateByUrl('/subscribe-me');

}
handleSubTeam(){
  this.clearLocalStorageExceptUsuario();
  this.router.navigateByUrl("subscribe-team")
}

handleSubCe(){
  this.clearLocalStorageExceptUsuario();
  this.router.navigateByUrl("subscribe-ce")
}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
      
    });
  }
}
