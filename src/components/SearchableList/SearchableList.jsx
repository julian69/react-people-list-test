import { useState } from 'react';
import List from 'components/List';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ListFilters from 'components/ListFilters';
import { PEOPLE_TYPE } from 'constants/peopleType';
import { updateActivePerson } from 'redux/actions/people';
import { CURRENCY_SYMBOL } from 'constants/currencySymbol';
import { getPeople, getPeopleLoadingStatus } from 'redux/selectors/people';

import { CardStyled, CardHeaderStyled, CardBodyStyled, LoadingLogoStyled } from './SearchableList.styled';

const FILTERS_INIT = {
  [PEOPLE_TYPE.CONTRACTOR]: false,
  [PEOPLE_TYPE.EMPLOYEE]: false
};

const COLUMNS = [
  'name',
  'role',
  'type',
  'country',
  'salary',
];

function SearchableList({ people, hasPeopleLoaded, updateActivePerson }) {
  const history = useHistory();
  const [activeFilter, setActiveFilter] = useState(FILTERS_INIT);

  const generateRows = () => people.map(person => ({
    id: person.id,
    name: person.name,
    role: person.jobTitle,
    type: person.employment,
    country: person.country,
    salary: `${CURRENCY_SYMBOL[person.currency]} ${person.currency} ${person.salary}`
  }));

  const getActivePerson = (id) => people.filter(person => person.id === id)[0]

  return (
    <CardStyled>
      <CardHeaderStyled>
      <ListFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      </CardHeaderStyled>
      <CardBodyStyled>
      <List
        isLoading={!hasPeopleLoaded}
        rows={generateRows()}
        columns={COLUMNS}
        action={{
          label: 'Edit',
          onClick: (person) => {
            updateActivePerson(getActivePerson(person.id));
            history.push('people/form');
          },
        }}
      />
      </CardBodyStyled>
      {!hasPeopleLoaded && <LoadingLogoStyled />}
    </CardStyled>
  );
}

SearchableList.propTypes = {
  people: PropTypes.array,
  hasPeopleLoaded: PropTypes.bool,
  updateActivePerson: PropTypes.func.isRequired,
};

export default connect(state => ({
  people: getPeople(state),
  hasPeopleLoaded: getPeopleLoadingStatus(state),
}), { updateActivePerson })(SearchableList);

