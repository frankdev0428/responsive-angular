import * as fromPeople from './people.actions';

describe('loadPeoples', () => {
  it('should return an action', () => {
    expect(fromPeople.loadPeoples().type).toBe('[People] Load Peoples');
  });
});
