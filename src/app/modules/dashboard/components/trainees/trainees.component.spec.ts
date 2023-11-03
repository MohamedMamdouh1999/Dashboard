import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineesComponent } from './trainees.component';

describe('TraineesComponent', () => {
  let component: TraineesComponent;
  let fixture: ComponentFixture<TraineesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraineesComponent]
    });
    fixture = TestBed.createComponent(TraineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
