import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Countries List' },
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())],
};
