import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PeopleEffects } from './people.effects';

describe('PeopleEffects', () => {
  let actions$: Observable<any>;
  let effects: PeopleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PeopleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PeopleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
