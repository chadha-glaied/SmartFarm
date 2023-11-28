import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdilepaComponent } from './prodilepa.component';

describe('ProdilepaComponent', () => {
  let component: ProdilepaComponent;
  let fixture: ComponentFixture<ProdilepaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdilepaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdilepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
