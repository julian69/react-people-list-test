import PropTypes from 'prop-types';
import { TextLight } from 'components/Text';

export default function Subtitle({ text }) {
  return (
    <TextLight as="p">
      {text}
    </TextLight>
  );
}

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};