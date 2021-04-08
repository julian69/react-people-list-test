import PropTypes from 'prop-types';
import Title from 'components/Title';
import Button from 'components/Button';
import { iconTypes } from 'components/Icon';

import { Wrapper, UserIcon } from './SectionHeader.styled';

export default function SectionHeader({
  title,
  buttonParams: {
    icon,
    label,
    onClick,
  }
}) {
  return (
    <Wrapper>
      <Title text={title} />
      <Button onClick={onClick}>
        {icon && <UserIcon {...icon}/>}
        {label}
      </Button>
    </Wrapper>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  buttonParams: PropTypes.shape({
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.shape(iconTypes),
  }).isRequired
};