import { Component } from '@angular/core';
import { Car } from '../../car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  car: Car = {} as Car;
  isUpdate: boolean = false;
  idCount: number = 4;

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

  saveCar() {

    if (!this.isUpdate) {
      this.car.id = this.idCount;
      this.idCount++;
      this.cars.push(this.car);
    }
    
    this.car = {} as Car;
    this.isUpdate = false;
  }

  update(selectedCar: Car) {
    this.car = selectedCar;
    this.isUpdate = true;
  }

  remove(car: Car) {
    this.cars = this.cars.filter(c => c !== car);
  }
}
