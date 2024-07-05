import { Component,OnInit } from '@angular/core';
import { EventoMenuComponent } from '../MENU-DESPLEGABLE-FLUJO/evento-menu/evento-menu.component';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [EventoMenuComponent,CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit{

  constructor(private router: Router){}
  currentUrl: string = '';


redirectToStore() {
  this.router.navigateByUrl('/store');
}

redirectToHome() {
  this.router.navigateByUrl('/');
}

redirectToRecorrido(){
  this.router.navigateByUrl("/Recorrido")
}

redirectToPatrocinio(){
  this.router.navigateByUrl("/patrocinio")
}


ngOnInit(): void {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.currentUrl = event.url;
    }
    
  });
}
}
