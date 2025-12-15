import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './property-details.html',
  styleUrls: ['./property-details.css']
})
export class PropertyDetailsComponent {

  propertyId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.propertyId = Number(this.route.snapshot.paramMap.get('id'));
  }

  bookNow() {
    this.router.navigate(['/properties', this.propertyId, 'book']);
  }
}
