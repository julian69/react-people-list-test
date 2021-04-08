import { buildPeopleURL, getPeopleUrl } from 'utils/url';

const BASE_PEOPLE_URL = process.env.REACT_APP_PEOPLE_URL;

describe('Url utils', () => {
  describe('buildPeopleURL', () => {
    it('should return an url containing only the name param', () => {
      const result = buildPeopleURL({ name: 'test', type: []});
      expect(result).toBe(`${BASE_PEOPLE_URL}?name_like=test`);
    });

    it('should return an url containing only the type param', () => {
      const result = buildPeopleURL({ name: '', type: ['test']});
      expect(result).toBe(`${BASE_PEOPLE_URL}?employment=test`);
    });

    it('should return an url containing all params', () => {
      const result = buildPeopleURL({ name: 'name', type: ['type']});
      expect(result).toBe(`${BASE_PEOPLE_URL}?name_like=name&employment=type`);
    });

    it('should return an url containing only the name if there are multiple types present', () => {
      const result = buildPeopleURL({ name: 'name', type: ['type1', 'type2']});
      expect(result).toBe(`${BASE_PEOPLE_URL}?name_like=name`);
    });

    it('should return an url containing the first type if many present', () => {
      const result = buildPeopleURL({ name: '', type: ['type1', 'type2']});
      expect(result).toBe(`${BASE_PEOPLE_URL}?employment=type1`);
    });
  });

  describe('getPeopleUrl', () => {
    it('should return the base URL if no params present', () => {
      const result = getPeopleUrl();
      expect(result).toBe(BASE_PEOPLE_URL);
    });

    it('should return the base URL if params are false', () => {
      const result = getPeopleUrl({ name: '', type: []});
      expect(result).toBe(BASE_PEOPLE_URL);
    });
  });
});