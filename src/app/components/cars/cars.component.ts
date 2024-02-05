import { Component } from '@angular/core';
import { Car } from '../../car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  //data
  cars: Car[] = [
    {
      id: 1,
      name: "Palio",
      automaker: "Fiat",
      price: 25000,
      year: 2000
    },
    {
      id: 2,
      name: "Fox",
      automaker: "Volkswagen",
      price: 50000,
      year: 2015
    },
    {
      id: 3,
      name: "Versa",
      automaker: "Nissan",
      price: 75000,
      year: 2019
    },
  ]
}
