import { ICONS } from 'theme/icons';
import { iconTypes } from './types';
import { Wrapper } from './Icon.styled';

export default function Icon(props) {
  const IconComponent = ICONS[props.name];

  return (
    <Wrapper>
      <IconComponent {...props} />
    </Wrapper>
  );
}

Icon.propTypes = iconTypes;

Icon.defaultProps = {
  fill: "none",
  width:  "20px",
  height:  "20px",
  stroke:  "none",
  linecap:  "none",
  linejoin:  "none",
  strokeWidth:  "none",
};