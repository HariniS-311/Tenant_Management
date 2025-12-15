import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { PropertyListComponent } from './components/property-list/property-list';
import { PropertyDetailsComponent } from './components/property-details/property-details';
import { BookingRequestComponent } from './components/booking-request/booking-request';
import { OwnerDashboardComponent } from './components/owner-dashboard/owner-dashboard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'properties', pathMatch: 'full' },

      { path: 'properties', component: PropertyListComponent },
      { path: 'properties/:id', component: PropertyDetailsComponent },
      { path: 'properties/:id/book', component: BookingRequestComponent },

      { path: 'owner/dashboard', component: OwnerDashboardComponent }
    ])
  ]
};
