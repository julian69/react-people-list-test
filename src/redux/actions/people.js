import { ACTION_TYPES } from 'redux/action-types';
import { getPeople, createNewPerson, updatePersonData } from 'services/people';

export const addPerson = person => ({
  type: ACTION_TYPES.ADD_PERSON,
  payload: { person },
});

export const editPerson = person => ({
  type: ACTION_TYPES.UPDATE_PERSON,
  payload: { person },
});

export const updateActivePerson = activePerson => ({
  type: ACTION_TYPES.UPDATE_ACTIVE_PERSON,
  payload: { activePerson },
});

const updatePeopleLoadingStatus = hasPeopleLoaded => ({
  type: ACTION_TYPES.UPDATE_PEOPLE_LOADING_STATUS,
  payload: { hasPeopleLoaded },
})

const updatePersonRequestStatus = isPersonRequestLoading => ({
  type: ACTION_TYPES.UPDATE_PERSON_REQUEST_STATUS,
  payload: { isPersonRequestLoading },
})

export const updateFormErrorsStatus = hasFormErrors => ({
  type: ACTION_TYPES.UPDATE_FORM_ERRORS_STATUS,
  payload: { hasFormErrors },
})

export const updatePersonRequestResponseState = isPersonRequestSuccess => ({
  type: ACTION_TYPES.UPDATE_PERSON_REQUEST_RESPONSE_STATE,
  payload: { isPersonRequestSuccess },
});

export const updateTypeFilter = type => ({
  type: ACTION_TYPES.UPDATE_TYPE_FILTER,
  payload: { type },
});

export const updateNameFilter = name => ({
  type: ACTION_TYPES.UPDATE_NAME_FILTER,
  payload: { name },
});

export const addNewPerson = person => async dispatch => {
  dispatch(updatePersonRequestStatus(true));
  dispatch(addPerson(person));

  return createNewPerson(person)
    .then((response) => {
      dispatch(updatePersonRequestStatus(false));
      dispatch(updatePersonRequestResponseState(response.ok));
    });
};

export const updatePerson = person => async dispatch => {
  dispatch(updatePersonRequestStatus(true));
  dispatch(editPerson(person));

  return updatePersonData(person)
    .then((response) => {
      dispatch(updatePersonRequestStatus(false));
      dispatch(updatePersonRequestResponseState(response.ok));
    });
};

export const fetchPeople = (params) => async dispatch => {
  dispatch(updatePeopleLoadingStatus(false));

  return getPeople(params)
  .then((response) => {
    dispatch({
      type: ACTION_TYPES.FETCH_PEOPLE,
      payload: { people: response },
    });

    dispatch(updatePeopleLoadingStatus(true));
  });
};