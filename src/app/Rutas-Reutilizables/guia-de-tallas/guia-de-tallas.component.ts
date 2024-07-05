import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-guia-de-tallas',
  standalone: true,
  imports: [],
  templateUrl: './guia-de-tallas.component.html',
  styleUrl: './guia-de-tallas.component.css'
})
export class GuiaDeTallasComponent {
  constructor(private location: Location) {}

  back(): void {
    this.location.back();
  }
}
