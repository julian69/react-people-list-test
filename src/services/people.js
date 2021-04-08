import { getPeopleUrl, handleFetchResponse, BASE_PEOPLE_URL } from 'utils/url';

export const getPeople = async params => {
  try {
    const response = await fetch(getPeopleUrl(params));

    handleFetchResponse(response);

    const people = await response.json();
    return people;
  } catch (error) {
    console.log(error)
  }
};

export const createNewPerson = async person => {
  try {
    const response = await fetch(
      BASE_PEOPLE_URL,
      {
        method: 'POST',
        body: JSON.stringify(person),
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error)
  }
}

export const updatePersonData = async person => {
  try {
    const response = await fetch(
      `${BASE_PEOPLE_URL}/${person.id}`,
      {
        method: 'PATCH',
        body: JSON.stringify(person),
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error)
  }
}

