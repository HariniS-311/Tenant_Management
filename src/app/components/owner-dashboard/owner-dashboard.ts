import { Component } from '@angular/core';

@Component({
  selector: 'app-owner-dashboard',
  standalone: true,
  templateUrl: './owner-dashboard.html',
  styleUrls: ['./owner-dashboard.css']
})
export class OwnerDashboardComponent {

  requests = [
    { tenant: 'Harini', property: '2BHK Apartment' },
    { tenant: 'Arun', property: '1BHK House' }
  ];
}

