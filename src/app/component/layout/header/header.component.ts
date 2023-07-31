import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    console.log(this.dataService.test);
  }

  getTestData(): void {
    console.log(this.dataService.test);
  }

}
