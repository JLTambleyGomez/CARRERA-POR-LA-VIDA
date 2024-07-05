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
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, NgForOf, NgIf],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  allProducts: Product[] = [
    { name: 'Camiseta hombre', price: 45000, sizes: ['S', 'M', 'L'], quantity: 0 },
    { name: 'Camiseta mujer', price: 45000, sizes: ['S', 'M', 'L'], quantity: 0 }
  ];
  localStorageKey = 'productos';

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.loadProductsFromLocalStorage();
    this.allProducts.forEach(product => {
      if (!product.selectedSize) {
        product.selectedSize = product.sizes[0];
      }
    });
  }

  loadProductsFromLocalStorage(): void {
    const savedProducts = localStorage.getItem(this.localStorageKey);
    if (savedProducts) {
      const storedProducts = JSON.parse(savedProducts);
      this.allProducts.forEach(product => {
        const storedProduct = storedProducts.find((p: Product) => p.name === product.name);
        if (storedProduct) {
          product.quantity = storedProduct.quantity;
          product.selectedSize = storedProduct.selectedSize;
        }
      });
    }
  }

  goBack(): void {
    this.addToCart();
    this.location.back();
  }

  close(): void {
    this.addToCart();
    this.location.back();
  }

  selectSize(product: Product, size: string): void {
    product.selectedSize = size;
    this.saveToLocalStorage();
  }

  increaseQuantity(product: Product): void {
    product.quantity += 1;
    this.saveToLocalStorage();
  }

  decreaseQuantity(product: Product): void {
    if (product.quantity > 0) {
      product.quantity -= 1;
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.allProducts));
  }

  handleGuiaDeTallas(): void {
    this.router.navigateByUrl("/guiadetallas");
  }

  handleInscription(): void {
    this.router.navigateByUrl("/inscripcion-corredor");
  }

  handleTienda(): void {
    this.router.navigateByUrl("/tienda-vi");
  }

  addToCart(): void {
    if (localStorage.getItem('inscripcionEquipo')) {
      const inscripcion = JSON.parse(localStorage.getItem('inscripcionEquipo') || '{}');
      inscripcion.productosOpcionales = this.allProducts.some(product => product.quantity > 0) ? 'completo' : 'incompleto';
      localStorage.setItem('inscripcionEquipo', JSON.stringify(inscripcion));
    } else {
      const inscripcion = JSON.parse(localStorage.getItem('inscripcion') || '{}');
      inscripcion.productosOpcionales = this.allProducts.some(product => product.quantity > 0) ? 'completo' : 'incompleto';
      localStorage.setItem('inscripcion', JSON.stringify(inscripcion));
    }
    this.handleTienda();
  }
}
