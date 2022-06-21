import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodIntakeDetailsComponent } from './food-intake-details/food-intake-details.component';
import { HealthDetailsComponent } from './health-details/health-details.component';
import { HomeComponent } from './home/home.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'personDetails', pathMatch: 'full' },
      { path: 'personDetails', component: PersonDetailsComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'foodDetails', pathMatch: 'full' },
      { path: 'foodDetails', component: FoodDetailsComponent },
      { path: '', redirectTo: 'foodIntakeDetails', pathMatch: 'full' },
      { path: 'foodIntakeDetails', component: FoodIntakeDetailsComponent },
      { path: '', redirectTo: 'healthDetails', pathMatch: 'full' },
      { path: 'healthDetails', component: HealthDetailsComponent },
    ]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
