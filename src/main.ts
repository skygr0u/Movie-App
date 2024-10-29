import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app.routes';
const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),importProvidersFrom(AppRoutingModule)
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
