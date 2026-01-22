import { TestBed } from '@angular/core/testing';

import { DbRouter } from './db-router';

describe('DbRouter', () => {
  let service: DbRouter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbRouter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
