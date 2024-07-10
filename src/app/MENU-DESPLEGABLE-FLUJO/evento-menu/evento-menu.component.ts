import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../../api-service.service';

@Component({
  selector: 'app-evento-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evento-menu.component.html',
  styleUrls: ['./evento-menu.component.css']
})
export class EventoMenuComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }
  
  currentUrl: string = "";
  user: any = null;  
  showMenu: boolean = false;

  handleShowMenu() {
    this.showMenu = !this.showMenu;
  }

  redirectTo(path: string) {
    this.showMenu = false;
    this.router.navigateByUrl(path);
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });

    this.apiService.getUserData().subscribe({
      next: userData => {
        this.user = userData;
      },
      error: error => {
        console.error('Error fetching user data', error);
      }
    });
  }
}
