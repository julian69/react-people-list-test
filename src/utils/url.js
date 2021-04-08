import { isEmpty } from "lodash";

export const BASE_PEOPLE_URL = process.env.REACT_APP_PEOPLE_URL;

export const buildPeopleURL = ({ name, type }) => {
  const NAME_ONLY_URL = `${BASE_PEOPLE_URL}?name_like=${name}`;
  const TYPE_ONLY_URL = `${BASE_PEOPLE_URL}?employment=${type[0]}`;
  const FULL_URL = `${BASE_PEOPLE_URL}?name_like=${name}&employment=${type[0]}`;

  let url;
  const isOnlyName = name && isEmpty(type);
  const isOnlyType = !isEmpty(type) && !name;
  const isMultiple = !isEmpty(type) && name;
  const shouldIgnoreType = type.length !== 1;

  if (isOnlyName) url = NAME_ONLY_URL;
  else if (isOnlyType) url = TYPE_ONLY_URL
  else if (isMultiple) {
    url = shouldIgnoreType
      ? NAME_ONLY_URL
      : FULL_URL;
  }

  return url;
}

export const getPeopleUrl = params =>
  !params
  || (!params.name && isEmpty(params.type))
  || !params.name && params.type.length > 1
    ? BASE_PEOPLE_URL
    : buildPeopleURL(params);

export const handleFetchResponse = response => {
  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }
};