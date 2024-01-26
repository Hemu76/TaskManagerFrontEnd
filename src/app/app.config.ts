import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RestapiService } from './restapi.service';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { DataService } from './data-service.service';

export const appConfig: ApplicationConfig = {
  providers: [DataService,provideHttpClient(withFetch()),HttpClientModule,RestapiService,provideRouter(routes), provideClientHydration()]
};
