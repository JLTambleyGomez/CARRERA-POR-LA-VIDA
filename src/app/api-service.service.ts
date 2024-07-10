import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  manualdisconnect: boolean = false;
  // apiUrl: string = "http://localhost:8000";
  apiUrl: string = "https://api.lacarreraporlavida.com";
  getHeader() {
    const lstoken = this.getAuthToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${lstoken}`
    });
  }

  getAuthToken() {
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      const token = JSON.parse(storedUser);
      console.log(token)
      return token
    }
  }

  //WompiPayment
  wompiPayment(data:any): Observable<any> {
    const header = this.getHeader();

    return this.http.post<any>(`${this.apiUrl}/api/payments/wompi`,data,{ headers: header })
  }
  //Mail

    sendMail(mailData: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/api/mail/send`, mailData).pipe(
      );
    }
  
  // Users
  createUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/users`, userData).pipe(
      tap(user => this.userSubject.next(user))
    );
  }

  authUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, userData).pipe(
      tap(async user => {
        await this.updateUserData(user);
      })
    );
  }



  getUsers(): Observable<any> {
    const header = this.getHeader();
    return this.http.get<any>(`${this.apiUrl}/api/users`, { headers: header }).pipe(
      tap(user => {
        this.updateUserData(user);
      })
    );
  }



  getUserById(id: string): Observable<any> {
    const header = this.getHeader();

    return this.http.get<any>(`${this.apiUrl}/api/users/${id}`, { headers: header }).pipe(
      tap(user => {
        this.updateUserData(user);
      })
    );
  }
  


  updateUser(id: string, data: any): Observable<any> {
    const params = new HttpParams().set('id', id);
    const header = this.getHeader();
    return this.http.patch<any>(`${this.apiUrl}/users/byEmail`, data, { headers: header, params });
  }

  // User Data 
  updateUserData(user: any) {
    this.userSubject.next(user);
    localStorage.setItem("usuario", JSON.stringify(user));
  }

  getUserData(): Observable<any> {
    return this.user$;
  }

  clearUserData(): Observable<any> {
    localStorage.clear();
    this.userSubject.next(null);
    this.router.navigateByUrl('/');
    this.manualdisconnect = true;
    return this.user$;
  }
  getCities(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/cities`);
  }

  getDepartments(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/departments`);
  }

  // Typedocs
  getTypedocs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/typedocs`);
  }

  getTypedocById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/typedocs/${id}`);
  }

  // Teams
  getTeams(): Observable<any> {
    const header = this.getHeader();
    return this.http.get<any>(`${this.apiUrl}/api/teams`, { headers: header });
  }

  getTeamById(id: string): Observable<any> {
    const header = this.getHeader();
    return this.http.get<any>(`${this.apiUrl}/api/teams/${id}`, { headers: header });
  }

  createTeam(teamData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.post<any>(`${this.apiUrl}/api/teams`, teamData, { headers: header });
  }

  updateTeam(id: string, teamData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.patch<any>(`${this.apiUrl}/api/teams/${id}`, teamData, { headers: header });
  }

  deleteTeam(id: string): Observable<any> {
    const header = this.getHeader();
    return this.http.delete<any>(`${this.apiUrl}/api/teams/${id}`, { headers: header });
  }

  // Survey
  getSurveys(): Observable<any> {
    const header = this.getHeader();
    return this.http.get<any>(`${this.apiUrl}/api/survey`, { headers: header });
  }

  getSurveyById(id: string): Observable<any> {
    const header = this.getHeader();
    return this.http.get<any>(`${this.apiUrl}/api/survey/${id}`, { headers: header });
  }

  createSurvey(surveyData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.post<any>(`${this.apiUrl}/api/survey`, surveyData, { headers: header });
  }

  updateSurvey(id: string, surveyData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.patch<any>(`${this.apiUrl}/api/survey/${id}`, surveyData, { headers: header });
  }

  deleteSurvey(id: string): Observable<any> {
    const header = this.getHeader();
    return this.http.delete<any>(`${this.apiUrl}/api/survey/${id}`, { headers: header });
  }

  // Runners
  getRunners(): Observable<any> {
    const header = this.getHeader();
    return this.http.get<any>(`${this.apiUrl}/api/runners`, { headers: header });
  }

  getRunnerById(id: string): Observable<any> {
    const header = this.getHeader();
    return this.http.get<any>(`${this.apiUrl}/api/runners/${id}`, { headers: header });
  }

  createRunnerNoTeam(runnerData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.post<any>(`${this.apiUrl}/api/runners/noteam`, runnerData, { headers: header });
  }

  createRunnerWithTeam(runnerData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.post<any>(`${this.apiUrl}/api/runners/withteam`, runnerData, { headers: header });
  }

  updateRunner(id: string, runnerData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.patch<any>(`${this.apiUrl}/api/runners/${id}`, runnerData, { headers: header });
  }

  deleteRunner(id: string): Observable<any> {
    const header = this.getHeader();
    return this.http.delete<any>(`${this.apiUrl}/api/runners/${id}`, { headers: header });
  }

  // Routes
  getRoutes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/routes`);
  }

  getRouteById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/routes/${id}`);
  }

  // Products
  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/products`);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/products/${id}`);
  }

  createProduct(productData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.post<any>(`${this.apiUrl}/api/products`, productData, { headers: header });
  }

  updateProduct(id: string, productData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.patch<any>(`${this.apiUrl}/api/products/${id}`, productData, { headers: header });
  }

  deleteProduct(id: string): Observable<any> {
    const header = this.getHeader();
    return this.http.delete<any>(`${this.apiUrl}/api/products/${id}`, { headers: header });
  }

  // Payments
  createOrder(userId: string): Observable<any> {
    const header = this.getHeader();
    return this.http.post<any>(`${this.apiUrl}/api/payments/order`, { userId }, { headers: header });
  }

  createEntry(entryData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.post<any>(`${this.apiUrl}/api/payments/entry`, entryData, { headers: header });
  }

  getOrders(): Observable<any> {
    const header = this.getHeader();
    return this.http.get<any>(`${this.apiUrl}/api/payments/order`, { headers: header });
  }

  getOrderById(orderId: string): Observable<any> {
    const header = this.getHeader();
    return this.http.get<any>(`${this.apiUrl}/api/payments/order/${orderId}`, { headers: header });
  }

  updateOrder(orderId: string, orderData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.patch<any>(`${this.apiUrl}/api/payments/order/${orderId}`, orderData, { headers: header });
  }

  deleteOrder(orderId: string): Observable<any> {
    const header = this.getHeader();
    return this.http.delete<any>(`${this.apiUrl}/api/payments/order/${orderId}`, { headers: header });
  }

  updateEntry(entryId: string, entryData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.patch<any>(`${this.apiUrl}/api/payments/entry/${entryId}`, entryData, { headers: header });
  }

  deleteEntry(entryId: string): Observable<any> {
    const header = this.getHeader();
    return this.http.delete<any>(`${this.apiUrl}/api/payments/entry/${entryId}`, { headers: header });
  }

  createBooking(bookingData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.post<any>(`${this.apiUrl}/api/bookings`, bookingData, { headers: header });
  }
  getBookings(): Observable<any> {
    const header = this.getHeader();
    return this.http.get<any>(`${this.apiUrl}/api/bookings`, { headers: header });
  }

  getBookingById(id: string): Observable<any> {
    const header = this.getHeader();
    return this.http.get<any>(`${this.apiUrl}/api/bookings/${id}`, { headers: header });
  }

  updateBooking(id: string, bookingData: any): Observable<any> {
    const header = this.getHeader();
    return this.http.patch<any>(`${this.apiUrl}/api/bookings/${id}`, bookingData, { headers: header });
  }

  deleteBooking(id: string): Observable<any> {
    const header = this.getHeader();
    return this.http.delete<any>(`${this.apiUrl}/api/bookings/${id}`, { headers: header });
  }
}
