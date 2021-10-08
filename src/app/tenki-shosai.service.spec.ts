import { TestBed } from '@angular/core/testing';

import { TenkiShosaiService } from './tenki-shosai.service';

describe('TenkiShosaiService', () => {
  let service: TenkiShosaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenkiShosaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
