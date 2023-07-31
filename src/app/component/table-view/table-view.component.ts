import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {

  @Input() carList: any[] = [];

  @Output() showcar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.carList)
  }

  show(index: number) {
    // console.log(this.carList[index]);

    this.showcar.emit(this.carList[index]);
  }

}
