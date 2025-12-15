import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-request',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking-request.html',
  styleUrls: ['./booking-request.css']
})
export class BookingRequestComponent {

  propertyId!: number;
  tenantName = '';
  message = '';

  constructor(private route: ActivatedRoute) {
    this.propertyId = Number(this.route.snapshot.paramMap.get('id'));
  }

  submitRequest() {
    alert(
      `Booking Request Sent!\nProperty ID: ${this.propertyId}\nTenant: ${this.tenantName}`
    );
  }
}
