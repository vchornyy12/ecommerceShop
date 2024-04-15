import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterLink, RouterOutlet, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  template: `
    <p>
      <router-outlet></router-outlet>
    </p>
  `
})

export class AdminModule { }
