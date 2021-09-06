import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/services/auth-guard.guard';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { AdminComponent } from './users/admin/admin.component';
import { ContributerComponent } from './users/contributer/contributer.component';


const routes: Routes = [
  {path: '', redirectTo: 'product-table/product-table', pathMatch: 'full'},
  {path: 'auth/signin', component:SigninComponent},
  {path: 'auth/signup', component:SignupComponent},
  {path: 'users/admin', component:AdminComponent},
  {
  path: 'users/contributer',
  component:ContributerComponent,
  canActivate:[AuthGuardGuard]
  },
  {path: 'product-table/product-table', component:ProductTableComponent},
  {path: 'nav-bar', component:NavBarComponent},
  {path: 'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
