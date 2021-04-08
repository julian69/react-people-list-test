import { capitalize } from 'lodash';
import PropTypes from 'prop-types';

import { LabelStyled, InputStyled, HelperStyled, SpanStyled } from './RadioButton.styled';

export default function RadioButton({ label, checked, onChange, className, helper }) {
  return (
      <LabelStyled className={`${className} ${checked ? 'active' : ''}`}>
        <div>
          <SpanStyled>{capitalize(label)}</SpanStyled>
          {helper &&<HelperStyled as="p">{helper}</HelperStyled>}
        </div>
         <InputStyled
          type="radio"
          checked={checked}
          onChange={() => onChange(!checked)}
        />
        <div />
      </LabelStyled>
  );
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  helper: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

RadioButton.defaultProps = {
  checked: true,
  disabled: false,
  className: '',
};