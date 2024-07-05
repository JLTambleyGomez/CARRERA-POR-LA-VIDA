import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-que-falta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-que-falta.component.html',
  styleUrls: ['./modal-que-falta.component.css']
})
export class MODALQUEFALTAComponent {
  showModal = true;

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
