import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCollegueComponent } from './form-collegue.component';

describe('FormCollegueComponent', () => {
  let component: FormCollegueComponent;
  let fixture: ComponentFixture<FormCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
