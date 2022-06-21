import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { HealthDetailsComponent } from './health-details/health-details.component';
import { FoodIntakeDetailsComponent } from './food-intake-details/food-intake-details.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent,
    FoodDetailsComponent,
    HealthDetailsComponent,
    FoodIntakeDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
