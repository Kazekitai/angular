import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAvisApplicationComponent } from './ajout-avis-application.component';

describe('AjoutAvisApplicationComponent', () => {
  let component: AjoutAvisApplicationComponent;
  let fixture: ComponentFixture<AjoutAvisApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutAvisApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAvisApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
