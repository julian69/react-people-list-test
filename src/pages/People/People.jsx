import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from './People.styled';
import { useHistory } from 'react-router-dom';
import { fetchPeople } from 'redux/actions/people';
import { getFilters } from 'redux/selectors/people';
import SectionHeader from 'components/SectionHeader';
import SearchableList from 'components/SearchableList';

function People({ fetchPeople, filters }) {
  const history = useHistory();
  const buttonParams = {
    icon: {
      name: "user",
      className: "user-icon",
      fill: "var(--colors-blank)",
    },
    label: 'Add member',
    onClick:() => history.push('/people/form'),
  };

  useEffect(() => {
    fetchPeople(filters);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <Container>
      <SectionHeader
        title={ 'People' }
        buttonParams={buttonParams} />
      <SearchableList />
    </Container>
  );
}

People.propTypes = {
  filters: PropTypes.object,
  fetchPeople: PropTypes.func.isRequired,
};

export default connect(state => ({
  filters: getFilters(state),
}),
{ fetchPeople })(People);

