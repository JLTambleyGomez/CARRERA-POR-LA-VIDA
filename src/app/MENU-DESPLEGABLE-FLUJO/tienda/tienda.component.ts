

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';

interface Product {
  name: string;
  price: number;
  sizes: string[];
  selectedSize?: string;
  quantity: number;
}


@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, NgForOf, NgIf],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent implements OnInit {
  products: Product[] = [];
  localStorageKey = 'productos';
  totalPrice: number = 0;
  showModal: boolean = false;
  productToRemove: Product | null = null;

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    const savedProducts = localStorage.getItem(this.localStorageKey);
    if (savedProducts) {
      this.products = JSON.parse(savedProducts).filter((product: Product) => product.quantity > 0);
      this.calculateTotalPrice();
    }
  }

  goBack(): void {
    this.location.back();
  }

  close(): void {
    this.location.back();
  }

  increaseQuantity(product: Product): void {
    product.quantity += 1;
    this.saveToLocalStorage();
    this.calculateTotalPrice();
  }

  confirmDecreaseQuantity(product: Product): void {
    if (product.quantity === 1) {
      this.productToRemove = product;
      this.showModal = true;
    } else {
      this.decreaseQuantity(product);
    }
  }

  decreaseQuantity(product: Product): void {
    if (product.quantity > 0) {
      product.quantity -= 1;
      this.saveToLocalStorage();
      this.calculateTotalPrice();
    }
  }

  saveToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.products));
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  checkout(): void {
    localStorage.setItem('loginfrom',"store");

    this.inscription();
  }

  additems(): void {
    this.router.navigateByUrl("/productos");
  }

  noAddItems(): void {
    this.router.navigateByUrl("/")
    localStorage.removeItem("productos");
    
  }

  inscription(): void {
    if (localStorage.getItem('usuario')) {
      this.router.navigateByUrl("/inscribir-equipo");
    } else {
      this.router.navigateByUrl("/inscripcion-corredor");
    }
  }

  removeProduct(): void {
    if (this.productToRemove) {
      this.products = this.products.filter(p => p !== this.productToRemove);
      this.saveToLocalStorage();
      this.calculateTotalPrice();
      this.closeModal();
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.productToRemove = null;
  }
}
