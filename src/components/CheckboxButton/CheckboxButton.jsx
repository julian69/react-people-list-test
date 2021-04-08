import { capitalize } from 'lodash';
import PropTypes from 'prop-types';

import { Label, Input } from './CheckboxButton.styled';

export default function CheckboxButton({ label, checked, onChange, className }) {
  return (
      <Label className={`${className} ${checked ? 'active' : ''}`}>
        {capitalize(label)}
        <Input
          type="checkbox"ß
          checked={checked}
          onChange={() => onChange(!checked)}
        />
        <div />
      </Label>
  );
}

CheckboxButton.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

CheckboxButton.defaultProps = {
  checked: true,
  disabled: false,
  className: '',
};