import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const CARS = [
  { "brand": "Fiat", "brandLogo": "https://picsum.photos/100/100?random=7", "model": "500L", "modelImage": "https://picsum.photos/200/300?random=1", "year": 2015, "price": 7500, "available": false },
  { "brand": "Fiat", "brandLogo": "https://picsum.photos/100/100?random=7", "model": "500 Abarth", "modelImage": "https://picsum.photos/200/300?random=2", "year": 2010, "price": 3500, "available": true },
  { "brand": "Ford", "brandLogo": "https://picsum.photos/100/100?random=8", "model": "Taurus", "modelImage": "https://picsum.photos/200/300?random=3", "year": 2009, "price": 5200, "available": false },
  { "brand": "Ford", "brandLogo": "https://picsum.photos/100/100?random=8", "model": "Focus", "modelImage": "https://picsum.photos/200/300?random=4", "year": 2014, "price": 9700, "available": true },
  { "brand": "Audi", "brandLogo": "https://picsum.photos/100/100?random=9", "model": "A3", "modelImage": "https://picsum.photos/200/300?random=5", "year": 2012, "price": 4300, "available": true },
  { "brand": "Audi", "brandLogo": "https://picsum.photos/100/100?random=9", "model": "Q7", "modelImage": "https://picsum.photos/200/300?random=6", "year": 2020, "price": 41700, "available": false }
];

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCars(): Observable<any[]> {
    return of(CARS);
  }
}
