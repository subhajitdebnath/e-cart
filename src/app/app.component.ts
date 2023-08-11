import { Component } from '@angular/core';

import { Car } from './core/models/cars.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-cart';

  test="";

  cars: Car[] = [
    {
      id: 1,
      name: 'abc',
      color: 'red'
    },
    {
      id: 2,
      name: 'xyz',
      color: 'white'
    },
  ];


  selectCar(index: number): void {
    console.log(this.cars[index]);

    this.cars[index].name = '1234';
  }
}
