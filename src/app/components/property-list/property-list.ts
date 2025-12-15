import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-list.html',
  styleUrls: ['./property-list.css']
})
export class PropertyListComponent {

  properties = [
    { id: 1, name: '2BHK Apartment', location: 'Chennai', rent: 12000 },
    { id: 2, name: '1BHK House', location: 'Coimbatore', rent: 8000 }
  ];

  constructor(private router: Router) {}

  viewDetails(id: number) {
    this.router.navigate(['/properties', id]);
  }
}


