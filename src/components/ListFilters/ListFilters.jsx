import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchInput from 'components/SearchInput';
import { PEOPLE_TYPE } from 'constants/peopleType';
import CheckboxButton from 'components/CheckboxButton';
import { updateTypeFilter } from 'redux/actions/people';

import { Container, Col, CheckboxButtonLeft } from './ListFilters.styled';

const { CONTRACTOR, EMPLOYEE } = PEOPLE_TYPE;

function ListFilters({ activeFilter, setActiveFilter, updateTypeFilter }) {
  const onChange = (filter) => {
      setActiveFilter({
      ...activeFilter,
      [filter]: !activeFilter[filter]
    });
    updateTypeFilter(filter);
  };

  return (
    <Container>
      <Col>
        <SearchInput />
      </Col>
      <Col>
        <CheckboxButtonLeft
          label={CONTRACTOR}
          checked={activeFilter[CONTRACTOR]}
          onChange={() => onChange(CONTRACTOR)}
        />
        <CheckboxButton
          label={EMPLOYEE}
          checked={activeFilter[EMPLOYEE]}
          onChange={() => onChange(EMPLOYEE)}
        />
      </Col>
    </Container>
  );
}

ListFilters.propTypes = {
  activeFilter: PropTypes.shape({
    [CONTRACTOR]: PropTypes.bool.isRequired,
    [EMPLOYEE]: PropTypes.bool.isRequired,
  }).isRequired,
  setActiveFilter: PropTypes.func.isRequired,
  updateTypeFilter: PropTypes.func.isRequired,
};

export default connect(state => ({}),
{ updateTypeFilter })(ListFilters);