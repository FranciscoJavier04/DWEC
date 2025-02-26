import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPosicionAsignadaComponent } from './insert-posicion-asignada.component';

describe('InsertPosicionAsignadaComponent', () => {
  let component: InsertPosicionAsignadaComponent;
  let fixture: ComponentFixture<InsertPosicionAsignadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertPosicionAsignadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertPosicionAsignadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
