import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import * as actions from 'redux/actions/people';
import fetchMock from 'fetch-mock';
import { ACTION_TYPES } from 'redux/action-types';

const BASE_PEOPLE_URL = process.env.REACT_APP_PEOPLE_URL;

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const store = mockStore({
  people: [],
  activePerson: null,
  filters: {
    name: '',
    type: [],
  },
  hasFormErrors: false,
  hasPeopleLoaded: false,
  isPersonRequestSuccess: false,
  isPersonRequestLoading: false,
});

beforeEach(() => {
  fetchMock.reset(BASE_PEOPLE_URL);
  fetchMock.resetHistory(BASE_PEOPLE_URL);
});

describe('async actions', () => {
  it('should fetch people and call the right actions', () => {
    fetchMock.mock(BASE_PEOPLE_URL, {
      body: [{}],
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: ACTION_TYPES.UPDATE_PEOPLE_LOADING_STATUS, payload: { hasPeopleLoaded: false }},
      { type: ACTION_TYPES.FETCH_PEOPLE, payload: { people: [{}] }},
      { type: ACTION_TYPES.UPDATE_PEOPLE_LOADING_STATUS, payload: { hasPeopleLoaded: true } },
    ];

    return store.dispatch(actions.fetchPeople())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
})