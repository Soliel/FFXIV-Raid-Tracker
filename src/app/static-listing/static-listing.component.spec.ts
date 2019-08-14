import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticListingComponent } from './static-listing.component';

describe('StaticListingComponent', () => {
  let component: StaticListingComponent;
  let fixture: ComponentFixture<StaticListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
