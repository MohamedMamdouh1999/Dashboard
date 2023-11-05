import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormComponent } from './select-form.component';

describe('SelectFormComponent', () => {
  let component: SelectFormComponent;
  let fixture: ComponentFixture<SelectFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFormComponent]
    });
    fixture = TestBed.createComponent(SelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
