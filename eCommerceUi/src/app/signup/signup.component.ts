import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    NgIf,
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
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup;
  hidePassword = true;

  constructor( private fb: FormBuilder,
               private snackBar: MatSnackBar,
               private authService: AuthService,
               private router: Router ) {

  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    })
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    const password = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;
    if(password !== confirmPassword){
      this.snackBar.open('Passwords do not match.', 'Close', {duration: 5000,
        panelClass: 'error-snackbar' });
      return;
    }
    this.authService.register(this.signupForm.value).subscribe(
      () => {
        this.snackBar.open('Sign up successful!', 'Close', {duration: 5000 });
        this.router.navigateByUrl("/login");
      },
      () => {
        this.snackBar.open('Sign up failed. Please try again.', 'Close', {duration: 5000,
          panelClass: 'error-snackbar' });
      }
    )
  }


}
