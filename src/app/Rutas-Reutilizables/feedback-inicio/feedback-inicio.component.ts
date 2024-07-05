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
    this.router.navigate(['/finalize-purchase']);
  }
}
