import { result } from 'lodash';
import { createSelector } from 'reselect';

export const getPeopleState = state => result(state, 'people');
export const getFilters = createSelector(getPeopleState, peopleState => result(peopleState, 'filters'));
export const getPeople = createSelector(getPeopleState, peopleState => result(peopleState, 'people', []));
export const getActivePerson = createSelector(getPeopleState, peopleState => result(peopleState, 'activePerson'));
export const getFormErrorsStatus = createSelector(getPeopleState, peopleState => result(peopleState, 'hasFormErrors'));
export const getPeopleLoadingStatus = createSelector(getPeopleState, peopleState => result(peopleState, 'hasPeopleLoaded'));
export const getPersonRequestStatus = createSelector(getPeopleState, peopleState => result(peopleState, 'isPersonRequestLoading'));
export const getPersonRequestResponseState = createSelector(getPeopleState, peopleState => result(peopleState, 'isPersonRequestSuccess'));
