import { handleFetchResponse } from 'utils/url';

export const COUNTRIES_URL = process.env.REACT_APP_COUNTRIES_URL;

export const getCountries = async () => {
  try {
    const response = await fetch(COUNTRIES_URL);
    const countries = await response.json();

    handleFetchResponse(response);

    localStorage.setItem('countries', JSON.stringify(countries));
  } catch (error) {
    console.log(error)
  }
}