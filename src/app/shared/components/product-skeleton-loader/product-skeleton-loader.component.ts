import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-skeleton-loader',
  templateUrl: './product-skeleton-loader.component.html',
  styleUrls: ['./product-skeleton-loader.component.scss']
})
export class ProductSkeletonLoaderComponent {
  @Input() loader!: boolean;
  numberofCards = 12;
  cards: any[] = [];
  ngOnInit() {
    for(let i = 0; i <= this.numberofCards; i++) {
      this.cards.push({
        id: i
      });
    }
  }
}
