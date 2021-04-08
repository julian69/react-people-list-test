import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import { TextLight } from 'components/Text';

import { Container } from './Alert.styled';

export default function Alert({ message }) {
  // TODO: For now it is only an error message, but it should be flexible enough as to
  // return different types such as success, warning, etc.
  return (
    <Container>
      <Icon name="timesCircle" width="22px" height="22px" fill="var(--colors-redPink)" />
      <TextLight as="p">{message}</TextLight>
    </Container>
  );
}

Alert.propTypes = {
  message: PropTypes.string,
};