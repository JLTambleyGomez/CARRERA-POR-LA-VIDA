import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-cuenta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {
  userDetails = {
    name: 'Carlos Sanchez',
    imageUrl: 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717105112/Carrera%20Por%20La%20Vida%20Client/acceso_liqq3v.png',
    inscription: null
  };

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }
}
