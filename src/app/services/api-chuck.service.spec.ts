import { TestBed } from '@angular/core/testing';

import { ApiChuckService } from './api-chuck.service';

describe('ApiChuckService', () => {
  let service: ApiChuckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiChuckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
