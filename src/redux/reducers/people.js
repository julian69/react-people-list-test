import { isNull } from 'lodash';
import { handleActions } from 'redux-actions';
import { ACTION_TYPES } from 'redux/action-types';

export const INIT_STATE = {
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
 };

const handleFetchPeople = (state, { payload: { people } }) => ({
  ...state,
  people
});

const handlePeopleLoadingUpdate = (state, { payload: { hasPeopleLoaded } }) => ({
  ...state,
  hasPeopleLoaded
});

const handlePersonRequestUpdate = (state, { payload: { isPersonRequestLoading } }) => ({
  ...state,
  isPersonRequestLoading
});

const handlePersonRequestResponseUpdate = (state, { payload: { isPersonRequestSuccess } }) => ({
  ...state,
  isPersonRequestSuccess
});

const handleActivePersonUpdate = (state, { payload: { activePerson } }) => ({
  ...state,
  activePerson
});

const handleTypeFilterUpdate = (state, { payload: { type } }) => {
  const isFilterAlreadySet = state.filters.type.includes(type);
  const typeResult = isFilterAlreadySet
    ? state.filters.type.filter(existingType => existingType !== type)
    : isNull(type) ? [] : [...state.filters.type, type];

  return ({
    ...state,
    filters: {
      ...state.filters,
      type: typeResult,
    }
  });
};

const handleNameFilterUpdate = (state, { payload: { name } }) => ({
  ...state,
  filters: {
    ...state.filters,
    name,
  }
});

const handleFormErrorsUpdate = (state, { payload: { hasFormErrors } }) => ({
  ...state,
  hasFormErrors,
});

export default handleActions({
  [ACTION_TYPES.FETCH_PEOPLE]: handleFetchPeople,
  [ACTION_TYPES.UPDATE_TYPE_FILTER]: handleTypeFilterUpdate,
  [ACTION_TYPES.UPDATE_NAME_FILTER]: handleNameFilterUpdate,
  [ACTION_TYPES.UPDATE_ACTIVE_PERSON]: handleActivePersonUpdate,
  [ACTION_TYPES.UPDATE_FORM_ERRORS_STATUS]: handleFormErrorsUpdate,
  [ACTION_TYPES.UPDATE_PEOPLE_LOADING_STATUS]: handlePeopleLoadingUpdate,
  [ACTION_TYPES.UPDATE_PERSON_REQUEST_STATUS]: handlePersonRequestUpdate,
  [ACTION_TYPES.UPDATE_PERSON_REQUEST_RESPONSE_STATE]: handlePersonRequestResponseUpdate,
}, INIT_STATE);