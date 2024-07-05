import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-patrocinio',
  standalone: true,
  imports: [],
  templateUrl: './patrocinio.component.html',
  styleUrl: './patrocinio.component.css'
})
export class PatrocinioComponent implements OnInit {

  constructor(private router:Router){}
  currentUrl=""


 redirectToInit(){
  this.router.navigateByUrl("/")
 }







  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
      
    });
  }
  }
  
