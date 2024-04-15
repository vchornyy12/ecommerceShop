import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    RouterLink, RouterOutlet
  ],
  template: `
    <p>
      <router-outlet></router-outlet>
    </p>
  `,
})
export class CustomerModule { }
