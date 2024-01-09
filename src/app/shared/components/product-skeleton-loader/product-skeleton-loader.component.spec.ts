import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSkeletonLoaderComponent } from './product-skeleton-loader.component';

describe('ProductSkeletonLoaderComponent', () => {
  let component: ProductSkeletonLoaderComponent;
  let fixture: ComponentFixture<ProductSkeletonLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSkeletonLoaderComponent]
    });
    fixture = TestBed.createComponent(ProductSkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
