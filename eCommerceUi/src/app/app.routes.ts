import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {AdminModule} from "./admin/admin.module";
import {CustomerModule} from "./customer/customer.module";
import {AminDashboardComponent} from "./admin/component/amin-dashboard/amin-dashboard.component";
import {CustomerDashboardComponent} from "./customer/component/customer-dashboard/customer-dashboard.component";
import {PostCategoryComponent} from "./admin/component/post-category/post-category.component";
import {PostProductComponent} from "./admin/component/post-product/post-product.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminModule,
    children: [
      { path: 'dashboard', component: AminDashboardComponent },
      { path: 'category', component: PostCategoryComponent },
      { path: 'product', component: PostProductComponent }
    ]
  },
  { path: 'customer', component: CustomerModule,
    children: [
      { path: 'dashboard', component: CustomerDashboardComponent }
    ]
  }
];
