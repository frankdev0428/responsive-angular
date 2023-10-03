import { Action, createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.actions';

export const peopleFeatureKey = 'people';

// TODO: Need to add People to the store and initialize it.
export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(PeopleActions.loadPeoples, state => state),

);

