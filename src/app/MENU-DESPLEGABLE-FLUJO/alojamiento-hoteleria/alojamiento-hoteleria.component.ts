import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import hotelsAndActivities from './hotels-and-activities.json';

interface Hotel {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  images: string[];
}

interface Activity {
  id: string;
  name: string;
  image: string;
}

@Component({
  selector: 'app-alojamiento-hoteleria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alojamiento-hoteleria.component.html',
  styleUrls: ['./alojamiento-hoteleria.component.css']
})
export class AlojamientoHoteleriaComponent implements OnInit {
  hotels: Hotel[] = [];
  activities: Activity[] = [];
  activityCurrentSlide = 0;
  hotelCurrentSlide = 0;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    this.hotels = hotelsAndActivities.hotels;
    this.activities = hotelsAndActivities.activities;
  }

  navigateToDetail(hotelName: string): void {
    this.router.navigate(['/alojamiento-hoteleria-detalle', hotelName]);
  }

  goBack(): void {
    this.location.back();
  }

  navigateToActivity(activityName: string): void {
    this.router.navigate(['/actividad-detalle', activityName]);
  }

  nextActivitySlide() {
    this.activityCurrentSlide = (this.activityCurrentSlide + 1) % Math.ceil(this.activities.length / 2);
  }

  previousActivitySlide() {
    this.activityCurrentSlide = (this.activityCurrentSlide - 1 + Math.ceil(this.activities.length / 2)) % Math.ceil(this.activities.length / 2);
  }

  goToActivitySlide(index: number) {
    this.activityCurrentSlide = index;
  }

  nextHotelSlide() {
    this.hotelCurrentSlide = (this.hotelCurrentSlide + 1) % Math.ceil(this.hotels.length / 2);
  }

  previousHotelSlide() {
    this.hotelCurrentSlide = (this.hotelCurrentSlide - 1 + Math.ceil(this.hotels.length / 2)) % Math.ceil(this.hotels.length / 2);
  }

  goToHotelSlide(index: number) {
    this.hotelCurrentSlide = index;
  }
}
