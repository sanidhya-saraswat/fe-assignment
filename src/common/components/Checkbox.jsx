import React from 'react';

const Checkbox = ({id, isChecked, label, onChange}) => <div>
  <input
    type="checkbox"
    id={id}
    checked={isChecked}
    onChange={onChange}
  />
  <label htmlFor={id}>{label}</label>
</div>;


export default Checkbox;
