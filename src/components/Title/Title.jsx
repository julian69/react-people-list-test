import PropTypes from 'prop-types';
import Text from 'components/Text';

export default function Title({ text }) {
  return (
    <Text size="h2" as="h1">
      {text}
    </Text>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};