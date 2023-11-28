import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutdComponent } from './ajoutd.component';

describe('AjoutdComponent', () => {
  let component: AjoutdComponent;
  let fixture: ComponentFixture<AjoutdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
