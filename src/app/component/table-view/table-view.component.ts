import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {

  @Input() carList: any[] = [
    {
      id: 1,
      name: 'a',
      color: 'red'
    }
  ];

  @Output() showcar = new EventEmitter();

  private firstSub!: Subscription;
  private customSub!: Subscription;

  customObs$!: Observable<any>;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.carList)
    
    // console.log('init table');

    this.customObs$ = Observable.create((observer: any) => {
      let counter = 0;
      setInterval(() => {
        if(counter > 3) {
          observer.complete();
        }
        if(counter === 3) {
          observer.error(new Error('counter error'))
        }
        observer.next(counter);
        counter++;
      }, 1000);
    });

    this.customSub = this.customObs$.subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err.message);
    });

  }

  show(index: number) {
    // console.log(this.carList[index]);
    this.firstSub = interval(2000).subscribe(count => {
      console.log(count);
    })

    this.showcar.emit(this.carList[index]);
  }

  ngOnDestroy(): void {
    // console.log('destroy table');

    this.firstSub?.unsubscribe();
    this.customSub?.unsubscribe();
  }

}
