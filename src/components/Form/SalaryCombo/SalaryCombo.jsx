import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from 'components/Form/TextField';
import SelectField from 'components/Form/SelectField';
import { updateFormErrorsStatus } from 'redux/actions/people';

import { SalaryComboField } from './SalaryCombo.styled';

function SalaryCombo({ salary, currency, onChange, updateFormErrorsStatus }) {
  const [errorMessage, setErrorMessage] = useState(null);

  const salaryOnChange = (value) => {
    const message = isNaN(value) ? 'Please enter a number' : null;
    setErrorMessage(message);
    updateFormErrorsStatus(isNaN(value));
    onChange('salary', value);
  };

  return (
    <SalaryComboField>
      <TextField
        label="Salary"
        value={salary || ''}
        errorMsg={errorMessage}
        placeholder="e.g. 5000"
        helper="Gross yearly salary"
        className={errorMessage ? 'error' : ''}
        onChange={event => salaryOnChange(event.currentTarget.value)}
      />
      <SelectField
        value={currency}
        className={errorMessage ? 'error' : ''}
        onChange={event => onChange('currency', event.currentTarget.value)}
      >
        <option value="" hidden>
          Select Currency
        </option>
        <option>EUR</option>
        <option>USD</option>
        <option>GBP</option>
      </SelectField>
    </SalaryComboField>
  );
}

SalaryCombo.propTypes = {
  salary:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  currency: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  updateFormErrorsStatus: PropTypes.func.isRequired,
};


export default connect(state => ({}),
{ updateFormErrorsStatus })(SalaryCombo);