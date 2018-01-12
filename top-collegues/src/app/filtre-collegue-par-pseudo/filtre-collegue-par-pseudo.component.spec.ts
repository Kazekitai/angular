import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreCollegueParPseudoComponent } from './filtre-collegue-par-pseudo.component';

describe('FiltreCollegueParPseudoComponent', () => {
  let component: FiltreCollegueParPseudoComponent;
  let fixture: ComponentFixture<FiltreCollegueParPseudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreCollegueParPseudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreCollegueParPseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
