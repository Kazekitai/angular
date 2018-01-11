import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCollegueComponent } from './detail-collegue.component';

describe('DetailCollegueComponent', () => {
  let component: DetailCollegueComponent;
  let fixture: ComponentFixture<DetailCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
