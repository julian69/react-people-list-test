import PropTypes from 'prop-types';
import RadioButton from 'components/RadioButton';
import { PEOPLE_TYPE } from 'constants/peopleType';

import { Container, TextStyled } from './EmploymentSelector.styled';

export default function EmploymentSelector({ type, onChange }) {
  const { CONTRACTOR, EMPLOYEE } = PEOPLE_TYPE;

  const onTypeChange = type => onChange('employment', type)

  return (
    <Container>
      <TextStyled as="h3">
        Type of employment
      </TextStyled>
      <RadioButton
        label={CONTRACTOR}
        helper="Pay your contractors"
        checked={type === CONTRACTOR}
        onChange={() => onTypeChange(CONTRACTOR)}
      />
      <RadioButton
        label={EMPLOYEE}
        checked={type === EMPLOYEE}
        helper="Hire and manage remotely"
        onChange={() => onTypeChange(EMPLOYEE)}
      />
    </Container>
  );
}

EmploymentSelector.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};