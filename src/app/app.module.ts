import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { NavComponent } from './partials/nav/nav.component';
import { FooterComponent } from './partials/footer/footer.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { SliderComponent } from './partials/slider/slider.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './pages/error/error.component';
import { ConsentComponent } from './partials/consent/consent.component';
import { CookieDirective } from './partials/consent/cookie.directive';
import { ProfileComponent } from './pages/profile/profile.component';
import { TimeAgoPipe } from './services/time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    NavComponent,
    FooterComponent,
    CollectionComponent,
    SliderComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    ConsentComponent,
    CookieDirective,
    ProfileComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Title
    // HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
