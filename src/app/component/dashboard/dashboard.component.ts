import { Component } from '@angular/core';
import { Car } from 'src/app/core/models/cars.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
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

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    console.log(this.dataService.test);
  }

  showCarParent(event: Car): void {
    console.log(event);
  }

  changeTestData(): void {
    this.dataService.test += 1;
  }
  
}
