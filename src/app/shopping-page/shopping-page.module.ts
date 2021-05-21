import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingPageRoutingModule } from './shopping-page-routing.module';
import { ShoppingPageComponent } from './shopping-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SearchPipe } from '../utils/search.pipe';
import { PaginationPipe } from '../utils/pagination.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';

@NgModule({
  declarations: [
    ShoppingPageComponent,
    ProductListComponent,
    ShoppingCartComponent,
    SearchPipe,
    PaginationPipe,
    ProductListItemComponent,
  ],
  imports: [
    CommonModule,
    ShoppingPageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
})
export class ShoppingPageModule {}
