import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import hotelsAndActivities from './hotels-and-activities.json';

interface Hotel {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  images: string[];
}

@Component({
  selector: 'app-alojamiento-hoteleria-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alojamiento-hoteleria-detalle.component.html',
  styleUrls: ['./alojamiento-hoteleria-detalle.component.css']
})
export class AlojamientoHoteleriaDetalleComponent implements OnInit {
  hotelName: string = '';
  hotelDetails: Hotel | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hotelName = params['hotelName'];
      this.hotelDetails = hotelsAndActivities.hotels.find((hotel: Hotel) => hotel.name === this.hotelName);
    });
  }

  goBack() {
    this.location.back();
  }

  contact() {
    window.location.href = `mailto:${this.hotelDetails?.email}`;
  }
}
