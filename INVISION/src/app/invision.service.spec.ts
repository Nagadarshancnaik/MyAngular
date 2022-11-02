import { TestBed } from '@angular/core/testing';

import { InvisionService } from './invision.service';

describe('InvisionService', () => {
  let service: InvisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
