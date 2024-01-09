import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './components/global-loader/global-loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductSkeletonLoaderComponent } from './components/product-skeleton-loader/product-skeleton-loader.component';



@NgModule({
  declarations: [
    GlobalLoaderComponent,
    NotFoundComponent,
    ProductSkeletonLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlobalLoaderComponent,
    NotFoundComponent,
    ProductSkeletonLoaderComponent
  ]
})
export class SharedModule { }
