import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDeTriageComponent } from './fiche-de-triage.component';

describe('FicheDeTriageComponent', () => {
  let component: FicheDeTriageComponent;
  let fixture: ComponentFixture<FicheDeTriageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheDeTriageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDeTriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
