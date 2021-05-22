import { Component, OnInit } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ApiService } from "../../domain/api.service";
import { ProductDto } from "../../domain/api.types";
import { MatSelectionListChange } from "@angular/material/list";
import { MatCheckboxChange } from "@angular/material/checkbox";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  items: ProductDto[] = [];
  selection = new SelectionModel<number>(true);
  constructor(private apiService: ApiService, private snackBar: MatSnackBar) {}
  ngOnInit() {
    this.apiService
      .getProducts({ _page: 0, _limit: 1000 })
      .then((items) => (this.items = items));
  }
  onSelectionChange(selection: MatSelectionListChange) {
    selection.option.selected
      ? this.selection.select(selection.option.value)
      : this.selection.deselect(selection.option.value);
  }
  onRemove($event: MouseEvent, index: number, item: ProductDto) {
    $event.stopPropagation();
    this.apiService.deleteProduct(item.id).then(() => {
      this.items.splice(index, 1);
      this.selection.deselect(item.id);
      this.items = [...this.items];
    });
  }
  trackByFn(index: number, item: ProductDto) {
    return item.id;
  }
  onEdit($event: MouseEvent) {
    $event.stopPropagation();
    // Open edit product modal
  }
  onRemoveAll() {
    this.apiService
      .deleteProducts(this.selection.selected)
      .then(() => {
        this.items = this.items.filter(
          (item) => !this.selection.isSelected(item.id)
        );
        this.selection.clear();
      })
      .catch((error) => this.snackBar.open(error, "", { duration: 2000 }));
  }

  onSelectAll($event: MatCheckboxChange) {
    $event.checked
      ? this.selection.select(...this.items.map((item) => item.id))
      : this.selection.clear();
  }
}
