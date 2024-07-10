import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { ApiService } from '../../api-service.service';
@Component({
  selector: 'app-mi-cuenta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {

  imageUrl:string= 'https://res.cloudinary.com/dzlgt5j3g/image/upload/v1717105112/Carrera%20Por%20La%20Vida%20Client/acceso_liqq3v.png'
  user:any={}
  constructor(private router: Router, private location: Location,private apiService:ApiService) {}

  ngOnInit(): void {

    this.apiService.getUserData().subscribe({
      next: userData => {
        this.user = userData;
      },
      error: error => {
        console.error('Error fetching user data', error);
      }
    });
  }
  goBack() {
    this.location.back();
  }
}
