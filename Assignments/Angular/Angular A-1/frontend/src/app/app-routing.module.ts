import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '',   redirectTo: '/memu-component', pathMatch: 'full' },
  {path: 'Admin-component', component:AdminComponent},
  {path: 'menu-component', component:MenuComponent},
  {path: 'restaurant-component', component:RestaurantComponent},
  {path: 'User-component', component:UserComponent},
  {path: '**',component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
