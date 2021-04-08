import PropTypes from 'prop-types';
import Alert from 'components/Alert';
import { connect } from 'react-redux';
import TextField from 'components/Form/TextField';
import SelectField from 'components/Form/SelectField';
import SalaryCombo from 'components/Form/SalaryCombo';
import EmploymentSelector from 'components/EmploymentSelector';

import { Form } from './PeopleForm.styled';

function PeopleForm({ person, onChange, isAlertVisible }) {
  const countries = JSON.parse(localStorage.getItem('countries')); // temporary Approach

  return (
    <Form>
      <TextField
        label="Name"
        placeholder="e.g. Kim Fog"
        helper="First and last name"
        value={person && person.name || ''}
        onChange={event => onChange('name', event.currentTarget.value)}
      />
      <TextField
        label="Job title"
        helper="What is their role?"
        placeholder="e.g. Product Manager"
        value={person && person.jobTitle || ''}
        onChange={event => onChange('jobTitle', event.currentTarget.value)}
      />
      <SelectField
        label="Country"
        helper="Where are they based?"
        value={person && person.country || ''}
        onChange={event => onChange('country', event.currentTarget.value)}
      >
        <option value="" hidden>
          Select Country...
        </option>
        { countries && countries.map(country => <option key={country.name}>{country.name}</option>) }
      </SelectField>
      <SalaryCombo
        onChange={onChange}
        salary={person && person.salary || null}
        currency={person && person.currency || "EUR"}
      />
      <EmploymentSelector
        onChange={onChange}
        type={person && person.employment || ''}
      />
      {isAlertVisible && <Alert message="Ups, something in our servers went wrong! " />}
    </Form>
  );
}

PeopleForm.propTypes = {
  isAlertVisible: PropTypes.bool,
  person: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

PeopleForm.defaultProps = {
  isAlertVisible: false,
}

export default connect(state => ({}))(PeopleForm);