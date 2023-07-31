import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  count!: number;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getTestData();
  }

  getTestData(): void {
    this.dataService.counter$.subscribe(res => {
      console.log(res);
    })
  }

}
