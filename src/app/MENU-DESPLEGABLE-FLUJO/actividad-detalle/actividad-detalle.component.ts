import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import hotelsAndActivities from './hotels-and-activities.json';

interface Activity {
  id: string;
  name: string;
  image: string;
}

@Component({
  selector: 'app-actividad-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividad-detalle.component.html',
  styleUrls: ['./actividad-detalle.component.css']
})
export class ActividadDetalleComponent implements OnInit {
  activityId: string = '';
  activityDetails: Activity | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.activityId = params['activityName'];
      this.activityDetails = hotelsAndActivities.activities.find((activity: Activity) => activity.name === this.activityId);
    });
  }

  goBack() {
    this.location.back();
  }
}
