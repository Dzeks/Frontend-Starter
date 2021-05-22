import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminPageRoutingModule } from "./admin-page-routing.module";
import { AdminPageComponent } from "./admin-page.component";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { ProductListComponent } from "./product-list/product-list.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { ProductOverlayComponent } from "./product-overlay/product-overlay.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AdminPageComponent,
    ProductListComponent,
    ProductOverlayComponent,
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    MatListModule,
    MatIconModule,
    ScrollingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
  ],
})
export class AdminPageModule {}
