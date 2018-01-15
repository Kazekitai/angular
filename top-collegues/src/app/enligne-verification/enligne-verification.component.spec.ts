import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnligneVerificationComponent } from './enligne-verification.component';

describe('EnligneVerificationComponent', () => {
  let component: EnligneVerificationComponent;
  let fixture: ComponentFixture<EnligneVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnligneVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnligneVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
