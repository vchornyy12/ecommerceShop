import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdminService} from "../../service/admin.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-post-category',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    NgIf,
    MatError,
    MatLabel,
    MatButton
  ],
  templateUrl: './post-category.component.html',
  styleUrl: './post-category.component.scss'
})
export class PostCategoryComponent {

  categoryForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]]

    })
  }

  addCategory(): void {
    if(this.categoryForm.valid){
      this.adminService.addCategory(this.categoryForm.value).subscribe((res) =>{
      if(res.id !=null){
        this.snackBar.open('Category added successfully!', 'Close',
          {duration: 5000
          });
        this.router.navigateByUrl('/admin/dashboard');
      } else {
        this.snackBar.open(res.message, 'Close', {
          duration: 5000, panelClass: 'error-snackbar'
        })
      }
    })
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }

}
