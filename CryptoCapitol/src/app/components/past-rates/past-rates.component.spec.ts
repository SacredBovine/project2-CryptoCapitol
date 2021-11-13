import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastRatesComponent } from './past-rates.component';

describe('PastRatesComponent', () => {
  let component: PastRatesComponent;
  let fixture: ComponentFixture<PastRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
