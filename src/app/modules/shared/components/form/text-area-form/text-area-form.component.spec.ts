import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaFormComponent } from './text-area-form.component';

describe('TextAreaFormComponent', () => {
  let component: TextAreaFormComponent;
  let fixture: ComponentFixture<TextAreaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextAreaFormComponent]
    });
    fixture = TestBed.createComponent(TextAreaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
