import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-from-participante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-from-participante.component.html',
  styleUrl: './feedback-from-participante.component.css'
})
export class FeedbackFromParticipanteComponent {


mostrarModal=false

OpenModal(){
  this.mostrarModal=true
}
CloseModal(){
  this.mostrarModal=false
}


}

