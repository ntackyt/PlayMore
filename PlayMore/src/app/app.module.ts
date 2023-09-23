import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateReviewComponent } from './create-review/create-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GamesPageComponent,
    ReviewsPageComponent,
    LoginPageComponent,
    CreateReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }