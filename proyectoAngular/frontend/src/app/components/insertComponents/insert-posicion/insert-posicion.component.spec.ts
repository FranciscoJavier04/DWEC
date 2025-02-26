import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPosicionComponent } from './insert-posicion.component';

describe('InsertPosicionComponent', () => {
  let component: InsertPosicionComponent;
  let fixture: ComponentFixture<InsertPosicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertPosicionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertPosicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
