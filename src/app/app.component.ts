import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MODALQUEFALTAComponent } from './MODAL-QUE-FALTA-/modal-que-falta/modal-que-falta.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ApiService } from './api-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, MODALQUEFALTAComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CARRERA-POR-LA-VIDA-CLIENT';

  constructor(private apiService: ApiService) {
    this.checkUser();
  }

  checkUser() {
    const userStr = localStorage.getItem("usuario");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        console.log(user.userId);
        if (user && user.userId) {
          this.apiService.getUserById(user.userId).subscribe({
            next: response => {
             
            },
            error: error => {
            },
            complete: () => {
            }
          });
        } else {
        }
      } catch (error) {
        console.error("Error parsing user JSON:", error);
      }
    }
  }
}
