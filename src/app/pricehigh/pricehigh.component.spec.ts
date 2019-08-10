import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricehighComponent } from './pricehigh.component';

describe('PricehighComponent', () => {
  let component: PricehighComponent;
  let fixture: ComponentFixture<PricehighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricehighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricehighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
