import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFutbolistaComponent } from './insert-futbolista.component';

describe('InsertFutbolistaComponent', () => {
  let component: InsertFutbolistaComponent;
  let fixture: ComponentFixture<InsertFutbolistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertFutbolistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertFutbolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
