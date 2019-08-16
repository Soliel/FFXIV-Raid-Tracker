import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'app-static-listing',
  templateUrl: './static-listing.component.html',
  styleUrls: ['./static-listing.component.scss']
})
export class StaticListingComponent implements AfterViewInit {
  staticListing;
  ripple: MDCRipple[];
  @ViewChildren('rippleComponent') childComponents: QueryList<any>;

  constructor(
    private http: HttpClient,
    public linkElement: ElementRef
  ) {
    this.staticListing = http.get('/bundles/AngularOutput/assets/TestStaticPayload.json');
  }

  ngAfterViewInit() {
    this.childComponents.changes.subscribe((list) => {
      list.forEach(rippleElement => {
        const rippleInstance = new MDCRipple(rippleElement.nativeElement);
      });
    });
  }
}
