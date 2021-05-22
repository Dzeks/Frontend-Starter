import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-product-overlay",
  templateUrl: "./product-overlay.component.html",
  styleUrls: ["./product-overlay.component.scss"],
})
export class ProductOverlayComponent implements OnInit {
  @ViewChild("overlayTpl", { static: false }) overlayTpl!: TemplateRef<any>;
  private dialogRef?: MatDialogRef<unknown, any>;
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}
  editProduct() {
    this.dialogRef = this.dialog.open(this.overlayTpl, {
      width: "500px",
      data: {},
    });
  }
  create() {}
}
