import { Component } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {NgForOf} from "@angular/common";
import {MatCard} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-amin-dashboard',
  standalone: true,
  imports: [
    NgForOf,
    MatCard,
    MatDivider,
    MatButton,
    RouterLink,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatSuffix,
    MatLabel,
    MatIcon
  ],
  templateUrl: './amin-dashboard.component.html',
  styleUrl: './amin-dashboard.component.scss'
})
export class AminDashboardComponent {

  products: any[] = [];
  searchProductForm!: FormGroup;


  constructor(private adminService: AdminService,
  private fb: FormBuilder,
  private snackBar: MatSnackBar){
  }

  ngOnInit(){
    this.getAllProducts();
    this.searchProductForm = this.fb.group({
      tittle: [null, [Validators.required]]
    })
  }

  getAllProducts(){
    this.products = [];
    this.adminService.getAllProducts().subscribe(res => {
      res.forEach((element: { processedImg: string; byteImg: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element);
      });
    })
  }

  submitForm(){
    this.products = [];
    const tittle = this.searchProductForm.get('tittle')!.value
    this.adminService.getAllProductsByName(tittle).subscribe(res => {
      res.forEach((element: { processedImg: string; byteImg: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element);
      });
    })
  }

  deleteProduct(productId: any){
    this.adminService.deleteProduct(productId).subscribe(res => {
      if (res == null) {
        this.snackBar.open('Product deleted successfully.', 'Close', {
          duration: 5000
        });
        this.getAllProducts();
      } else {
        this.snackBar.open(res.message, 'Close', {
          duration: 5000,
          panelClass: 'error snackBar'
        });
      }
    })
  }

}
