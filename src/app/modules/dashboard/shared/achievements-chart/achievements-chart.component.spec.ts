import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsChartComponent } from './achievements-chart.component';

describe('AchievementsChartComponent', () => {
  let component: AchievementsChartComponent;
  let fixture: ComponentFixture<AchievementsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchievementsChartComponent]
    });
    fixture = TestBed.createComponent(AchievementsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
