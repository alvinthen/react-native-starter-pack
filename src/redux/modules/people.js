// @flow
import { handle } from 'redux-pack';
import { fetchPeople } from './swapi';

// Actions
const FETCH_PEOPLE = 'rn/people/FETCH_PEOPLE';

// Action creators
const doFetchPeople = () => ({
  type: FETCH_PEOPLE,
  promise: fetchPeople(),
});

const initialState = {
  isLoading: false,
  error: null,
  people: [],
};

type State = typeof initialState;
type Action = { type: typeof FETCH_PEOPLE, payload: any };

const applyFetchPeople = (state, action) => handle(state, action, {
  start: prevState => ({
    ...prevState, isLoading: true, error: null, people: [],
  }),
  finish: prevState => ({ ...prevState, isLoading: false }),
  failure: prevState => ({ ...prevState, error: action.payload }),
  success: prevState => ({ ...prevState, people: action.payload.results }),
});

export default function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return applyFetchPeople(state, action);
    default:
      return state;
  }
}

export const actionCreators = { doFetchPeople };
