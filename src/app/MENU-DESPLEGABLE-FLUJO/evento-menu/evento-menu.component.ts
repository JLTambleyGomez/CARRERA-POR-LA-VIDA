import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../../api-service.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-evento-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evento-menu.component.html',
  styleUrls: ['./evento-menu.component.css']
})
export class EventoMenuComponent implements OnInit {

  constructor(
    private router: Router,
    private apiService: ApiService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }
  
  currentUrl: string = "";
  user: any = null;  
  showMenu: boolean = false;

  handleShowMenu() {
    this.showMenu = !this.showMenu;
  }

  redirectTo(path: string) {
    this.showMenu = false;
    if(path==="/logout"){
      this.apiService.clearUserData()
    }
    if(path==="/login"){
      localStorage.setItem("loginfrom","from-menu");
      this.router.navigateByUrl(path);

    }else
    this.router.navigateByUrl(path);
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });

    // Suscribirse al BehaviorSubject para obtener datos del usuario
    this.apiService.user$.subscribe({
      next: userData => {
        this.user = userData;
        this.changeDetectorRef.detectChanges();
      },
      error: error => {
        console.error('Error fetching user data', error);
      }
    });

    // Asegurarse de obtener los datos del usuario al iniciar
    this.apiService.getUserData().subscribe();
  }
}
