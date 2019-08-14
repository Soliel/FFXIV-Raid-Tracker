import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-static-listing',
  templateUrl: './static-listing.component.html',
  styleUrls: ['./static-listing.component.scss']
})
export class StaticListingComponent {
  staticListing;

  constructor(
    private http: HttpClient
  ) {
    this.staticListing = http.get('/assets/TestStaticPayload.json');
  }
}
