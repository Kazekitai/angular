import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueDesVotesComponent } from './historique-des-votes.component';

describe('HistoriqueDesVotesComponent', () => {
  let component: HistoriqueDesVotesComponent;
  let fixture: ComponentFixture<HistoriqueDesVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueDesVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueDesVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
