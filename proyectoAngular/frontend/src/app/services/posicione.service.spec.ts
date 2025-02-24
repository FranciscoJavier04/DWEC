import { TestBed } from '@angular/core/testing';
import { PosicioneService } from './posicione.service';

describe('PosicioneService', () => {
  let service: PosicioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosicioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
