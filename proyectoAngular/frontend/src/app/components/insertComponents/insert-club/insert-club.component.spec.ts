import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertClubComponent } from './insert-club.component';

describe('InsertClubComponent', () => {
  let component: InsertClubComponent;
  let fixture: ComponentFixture<InsertClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertClubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
