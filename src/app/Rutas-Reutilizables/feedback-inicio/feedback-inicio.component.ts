import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-inicio.component.html',
  styleUrls: ['./feedback-inicio.component.css']
})
export class FeedbackInicioComponent {
  constructor(private router: Router) {}

  closeFeedback() {
    const from = localStorage.getItem('loginfrom') 
    console.log(from)

    if (from=="solo-corredor"){
      this.router.navigate(['/inscripcion-corredor']);
      localStorage.removeItem('loginfrom');
    }
      if(!from){
        this.router.navigateByUrl("/")
      }

  }
 
}
