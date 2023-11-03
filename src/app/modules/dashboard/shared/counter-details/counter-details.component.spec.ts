import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDetailsComponent } from './counter-details.component';

describe('CounterDetailsComponent', () => {
  let component: CounterDetailsComponent;
  let fixture: ComponentFixture<CounterDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterDetailsComponent]
    });
    fixture = TestBed.createComponent(CounterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
