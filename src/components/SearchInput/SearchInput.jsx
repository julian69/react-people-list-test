import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateNameFilter } from 'redux/actions/people';

import { SearchIcon, SearchInputField, Container } from './SearchInput.styled';

function SearchInput({ updateNameFilter }) {
  const onChange = debounce(value => updateNameFilter(value), 1000);

  return (
    <Container>
      <SearchIcon
        name="search"
        width="16px"
       height="16px"
       fill="var(--colors-lynch)"
      />
      <SearchInputField
        placeholder="Search by name..."
        onChange={event => onChange(event.target.value)}
      />
    </Container>
  );
}

SearchInput.propTypes = {
  updateNameFilter: PropTypes.func.isRequired,
};

export default connect(state => ({}),
{ updateNameFilter })(SearchInput);