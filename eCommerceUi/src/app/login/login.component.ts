import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../services/auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {UserStorageService} from "../services/storage/user-storage.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatLabel,
    MatError,
    MatCard,
    MatCardTitle,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    NgIf,
    MatIconButton,
    MatIcon,
    MatButton,
    MatCardActions,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  togglePasswordVisibility(){
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    const username = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.authService.login(username, password).subscribe(
      (res) => {
        if(UserStorageService.isAdminLoggedIn()){
          this.router.navigateByUrl('admin/dashboard');
        }else if(UserStorageService.isCustomerLoggedIn()){
          this.router.navigateByUrl('customer/dashboard');
        }
      },
    (error) => {
        this.snackBar.open('Bad credentials', 'ERROR', {duration: 5000});
    }
    )
  }

}
