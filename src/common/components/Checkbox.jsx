import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({id, isChecked, label, onChange}) => <div>
  <input
    type="checkbox"
    id={id}
    checked={isChecked}
    onChange={onChange}
  />
  <label htmlFor={id}>{label}</label>
</div>;

Checkbox.propTypes = {
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  isChecked: false,
};

export default Checkbox;
