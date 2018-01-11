import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimiteNbColleguesComponent } from './limite-nb-collegues.component';

describe('LimiteNbColleguesComponent', () => {
  let component: LimiteNbColleguesComponent;
  let fixture: ComponentFixture<LimiteNbColleguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimiteNbColleguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimiteNbColleguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
