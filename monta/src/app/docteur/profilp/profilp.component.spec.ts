import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilpComponent } from './profilp.component';

describe('ProfilpComponent', () => {
  let component: ProfilpComponent;
  let fixture: ComponentFixture<ProfilpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
