import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: any[] = [];
  brands: string[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
      this.brands = [...new Set(cars.map(car => car.brand))];
    });
  }

  getRandomCars(): any[] {
    return this.cars.sort(() => 0.5 - Math.random()).slice(0, 2);
  }
}
