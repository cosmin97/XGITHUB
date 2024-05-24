import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  brandName: string = '';
  cars: any[] = [];

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.brandName = params['brand'];
      this.carService.getCars().subscribe(cars => {
        this.cars = cars.filter(car => car.brand === this.brandName);
      });
    });
  }
}
