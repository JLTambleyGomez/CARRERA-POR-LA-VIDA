import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  imports:[CommonModule]
})
export class AdminPanelComponent implements OnInit {
  // Propiedades para almacenar datos de cada recurso
  users: any[] = [];
  teams: any[] = [];
  surveys: any[] = [];
  runners: any[] = [];
  products: any[] = [];
  orders: any[] = [];
  entries: any[] = [];
  bookings: any[] = [];

  // Variables para manejar los detalles de cada recurso
  selectedUser: any = null;
  selectedTeam: any = null;
  selectedSurvey: any = null;
  selectedRunner: any = null;
  selectedProduct: any = null;
  selectedOrder: any = null;
  selectedEntry: any = null;
  selectedBooking: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadTeams();
    this.loadSurveys();
    this.loadRunners();
    this.loadProducts();
    this.loadOrders();
  }

  // Métodos para manejar cada recurso

  // Users
  loadUsers(): void {
    this.apiService.getUsers().subscribe(data => this.users = data);
  }

  updateUser(id: string, userData: any): void {
    this.apiService.updateUser(id, userData).subscribe(() => this.loadUsers());
  }


  searchUserById(id: string): void {
    this.apiService.getUserById(id).subscribe(user => this.selectedUser = user);
  }

  // Teams
  loadTeams(): void {
    this.apiService.getTeams().subscribe(data => this.teams = data);
  }

  updateTeam(id: string, teamData: any): void {
    this.apiService.updateTeam(id, teamData).subscribe(() => this.loadTeams());
  }

  deleteTeam(id: string): void {
    this.apiService.deleteTeam(id).subscribe(() => this.loadTeams());
  }

  searchTeamById(id: string): void {
    this.apiService.getTeamById(id).subscribe(team => this.selectedTeam = team);
  }

  // Surveys
  loadSurveys(): void {
    this.apiService.getSurveys().subscribe(data => this.surveys = data);
  }

  updateSurvey(id: string, surveyData: any): void {
    this.apiService.updateSurvey(id, surveyData).subscribe(() => this.loadSurveys());
  }

  deleteSurvey(id: string): void {
    this.apiService.deleteSurvey(id).subscribe(() => this.loadSurveys());
  }

  searchSurveyById(id: string): void {
    this.apiService.getSurveyById(id).subscribe(survey => this.selectedSurvey = survey);
  }

  // Runners
  loadRunners(): void {
    this.apiService.getRunners().subscribe(data => this.runners = data);
  }

  updateRunner(id: string, runnerData: any): void {
    this.apiService.updateRunner(id, runnerData).subscribe(() => this.loadRunners());
  }

  deleteRunner(id: string): void {
    this.apiService.deleteRunner(id).subscribe(() => this.loadRunners());
  }

  searchRunnerById(id: string): void {
    this.apiService.getRunnerById(id).subscribe(runner => this.selectedRunner = runner);
  }

  // Products
  loadProducts(): void {
    this.apiService.getProducts().subscribe(data => this.products = data);
  }

  updateProduct(id: string, productData: any): void {
    this.apiService.updateProduct(id, productData).subscribe(() => this.loadProducts());
  }

  deleteProduct(id: string): void {
    this.apiService.deleteProduct(id).subscribe(() => this.loadProducts());
  }

  searchProductById(id: string): void {
    this.apiService.getProductById(id).subscribe(product => this.selectedProduct = product);
  }

  // Orders
  loadOrders(): void {
    this.apiService.getOrders().subscribe(data => this.orders = data);
  }

  updateOrder(id: string, orderData: any): void {
    this.apiService.updateOrder(id, orderData).subscribe(() => this.loadOrders());
  }

  deleteOrder(id: string): void {
    this.apiService.deleteOrder(id).subscribe(() => this.loadOrders());
  }

  searchOrderById(id: string): void {
    this.apiService.getOrderById(id).subscribe(order => this.selectedOrder = order);
  }

  // Bookings
  loadBookings(): void {
    this.apiService.getBookings().subscribe(data => this.bookings = data);
  }

  createBooking(bookingData: any): void {
    this.apiService.createBooking(bookingData).subscribe(() => this.loadBookings());
  }

  searchBookingById(id: string): void {
    this.apiService.getBookingById(id).subscribe(booking => this.selectedBooking = booking);
  }

  updateBooking(id: string, bookingData: any): void {
    this.apiService.updateBooking(id, bookingData).subscribe(() => this.loadBookings());
  }

  deleteBooking(id: string): void {
    this.apiService.deleteBooking(id).subscribe(() => this.loadBookings());
  }

 }