import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCarruselComponent } from '../event-carrusel/event-carrusel.component';
import { EventoMenuComponent } from '../evento-menu/evento-menu.component';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule,EventCarruselComponent,EventoMenuComponent],
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {

  showMenu:boolean=false


handleShowMenu(){
  this.showMenu=!this.showMenu
}

}
