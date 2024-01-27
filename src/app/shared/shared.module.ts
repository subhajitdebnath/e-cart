import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './components/global-loader/global-loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductSkeletonLoaderComponent } from './components/product-skeleton-loader/product-skeleton-loader.component';
import { OddevencheckerPipe } from '../core/pipes/oddevenchecker.pipe';
import { CharacterlimitPipe } from '../core/pipes/characterlimit.pipe';



@NgModule({
  declarations: [
    GlobalLoaderComponent,
    NotFoundComponent,
    ProductSkeletonLoaderComponent,



    OddevencheckerPipe,
    CharacterlimitPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlobalLoaderComponent,
    NotFoundComponent,
    ProductSkeletonLoaderComponent,

    OddevencheckerPipe,
    CharacterlimitPipe,
  ]
})
export class SharedModule { }
