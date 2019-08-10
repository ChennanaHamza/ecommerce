import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricelowComponent } from './pricelow.component';

describe('PricelowComponent', () => {
  let component: PricelowComponent;
  let fixture: ComponentFixture<PricelowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricelowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
