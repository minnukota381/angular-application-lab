import { TestBed } from '@angular/core/testing';

import { MyHelcyService } from './my-helcy.service';

describe('MyHelcyService', () => {
  let service: MyHelcyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHelcyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
