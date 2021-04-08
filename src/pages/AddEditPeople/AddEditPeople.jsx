import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import Title from 'components/Title';
import { connect } from 'react-redux';
import Button from 'components/Button';
import Subtitle from 'components/Subtitle';
import { useEffect, useState } from 'react';
import { isEqual, omit, some } from 'lodash';
import { useHistory } from 'react-router-dom';
import PeopleForm from 'components/PeopleForm';
import { Card, CardBody } from 'components/Card';
import {
  getActivePerson,
  getFormErrorsStatus,
  getPersonRequestStatus,
  getPersonRequestResponseState
} from 'redux/selectors/people';
import {
  addNewPerson,
  updatePerson,
  updateTypeFilter,
  updateNameFilter,
  updateActivePerson,
  updatePersonRequestResponseState,
 } from 'redux/actions/people';

import { Container, CustomCardFooter, CustomCardHeader } from './AddEditPeople.styled';

const PERSON_INIT = {
  id: null,
  name: null,
  jobTitle: null,
  country: null,
  salary: null,
  currency: 'EUR',
  employment: null,
};

function AddEditPeople({
  updatePerson,
  activePerson,
  addNewPerson,
  hasFormErrors,
  updateTypeFilter,
  updateNameFilter,
  isRequestLoading,
  updateActivePerson,
  wasRequestSuccessful,
  updatePersonRequestResponseState,
}) {
  const history = useHistory();
  const [submitted, setSubmitted] = useState(false);
  const [person, setPerson] = useState(activePerson || PERSON_INIT);

  useEffect(() => {
    wasRequestSuccessful && resetAndRedirect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[wasRequestSuccessful]);

  const isEdit = !!person.id;
  const isSubmitDisabled = hasFormErrors
      || some(omit(person, 'id'), value => !Boolean(value))
      || isEqual(person, activePerson);

  const onChange = (field, value) => setPerson(person => ({
    ...person,
    [field]: value,
  }));

  const resetAndRedirect = () => {
    updateActivePerson(null);
    updateTypeFilter(null);
    updateNameFilter('');
    updatePersonRequestResponseState(false);
    history.push('/');
  };

  const onSubmit = () => {
    isEdit ? updatePerson(person) : addNewPerson(omit(person, 'id'));
    setSubmitted(true);
  };

  const getSubmitButtonContent = () => !isRequestLoading
    ? isEdit ? 'Save' : 'Add member'
    : <Icon
        name="loading"
        width="16px"
        height="16px"
        stroke="var(--colors-blank)"
      />;

  return (
    <Container>
      <Card>
        <CustomCardHeader>
          <Title text={`${isEdit ? 'Edit' : 'Add'} a team member`}  />
          <Subtitle text={ `Fill out the information of ${isEdit ? 'the' : 'your new'} team member.`} />
        </CustomCardHeader>
        <CardBody>
          <PeopleForm
            person={person}
            onChange={onChange}
            isAlertVisible={submitted && !isRequestLoading && !wasRequestSuccessful}
          />
        </CardBody>
        <CustomCardFooter>
          <Button
            type={'secondary'}
            onClick={resetAndRedirect}
          >
            Cancel
          </Button>
          <Button
            type={'primary'}
            onClick={onSubmit}
            disabled={isSubmitDisabled}
          >
            {getSubmitButtonContent()}
          </Button>
        </CustomCardFooter>
      </Card>
    </Container>
  );
}

AddEditPeople.propTypes = {
  activePerson: PropTypes.object,
  addNewPerson: PropTypes.func.isRequired,
  updatePerson: PropTypes.func.isRequired,
  hasFormErrors: PropTypes.bool.isRequired,
  updateActivePerson: PropTypes.func.isRequired,
  updateTypeFilter: PropTypes.func.isRequired,
  updateNameFilter: PropTypes.func.isRequired,
  wasRequestSuccessful: PropTypes.bool.isRequired,
  updatePersonRequestResponseState: PropTypes.func.isRequired,
};

export default connect(state => ({
  activePerson: getActivePerson(state),
  hasFormErrors: getFormErrorsStatus(state),
  isRequestLoading: getPersonRequestStatus(state),
  wasRequestSuccessful: getPersonRequestResponseState(state),
}), {
  addNewPerson,
  updatePerson,
  updateTypeFilter,
  updateNameFilter,
  updateActivePerson,
  updatePersonRequestResponseState
})(AddEditPeople);