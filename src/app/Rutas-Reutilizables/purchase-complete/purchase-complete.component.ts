import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase-complete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase-complete.component.html',
  styleUrls: ['./purchase-complete.component.css']
})
export class PurchaseCompleteComponent {

  constructor(private router: Router) {}

  finish() {
    this.router.navigate(['/']);
  }
}
