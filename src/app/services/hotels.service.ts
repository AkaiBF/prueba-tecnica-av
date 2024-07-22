import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/hotel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>('http://localhost:3000/hotels');
  }

  getFilteredHotels(query: string): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`http://localhost:3000/hotels${query}`);
  }

  getHotel(id: string): Observable<Hotel> {
    return this.http.get<Hotel>(`http://localhost:3000/hotels/${id}`);
  }
}
