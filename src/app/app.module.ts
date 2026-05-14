// src/app/app.module.ts
// Root Module of the application
// Declares all components, imports required modules, and configures the app

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { RegistrationComponent } from './components/registration/registration.component';

// AppModule - Root module of the application
// All feature modules, components, and services are declared and imported here
@NgModule({
  // Declare all components used in this module
  declarations: [
    AppComponent,
    CountryComponent,
    RegistrationComponent
  ],
  // Import required modules for the application
  imports: [
    BrowserModule,           // Required for browser-based applications
    FormsModule,            // Required for ngModel, form binding
    HttpClientModule,       // Required for HTTP requests
    BrowserAnimationsModule // For animations support
  ],
  // Services to be available application-wide
  providers: [
    // CountryService is provided at root level, so it's available throughout the app
  ],
  // Root component to bootstrap
  bootstrap: [AppComponent]
})
export class AppModule { }
