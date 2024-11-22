import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { starshipsResolver } from './starship.resolver';

describe('starshipResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      starshipsResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
