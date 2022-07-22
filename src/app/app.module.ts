import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductsModule } from './products/products.module';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './products/components/cart/cart.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
    ]),
    ProductsModule,
  ],
  declarations: [AppComponent, HelloComponent, TopBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
