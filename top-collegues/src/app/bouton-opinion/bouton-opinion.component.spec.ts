import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonOpinionComponent } from './bouton-opinion.component';

describe('BoutonOpinionComponent', () => {
  let component: BoutonOpinionComponent;
  let fixture: ComponentFixture<BoutonOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutonOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
