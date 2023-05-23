
import React, {useState} from 'react';
import {fetchInfoFromPincode} from '../../../common/utils/api';
import PropTypes from 'prop-types';

const ShippingInformation = ({submitHandler}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const formActionMappings = {
    'firstName': setFirstName,
    'lastName': setLastName,
    'address': setAddress,
    'apartment': setApartment,
    'state': setState,
    'city': setCity,
    'pincode': setPincode,
  };

  const onFormInputChange = async (e) => {
    formActionMappings[e.target.name](e.target.value);
    if (e.target.name == 'pincode') {
      const response = await fetchInfoFromPincode(e.target.value);
      if (response[0].Status == 'Success') {
        setState(response[0]['PostOffice'][0]['State']);
        setCity(response[0]['PostOffice'][0]['District']);
      } else {
        setState('');
        setCity('');
      }
    }
  };

  const getButtonDisabledState = () => {
    return !(firstName.length &&
      lastName.length &&
      address.length &&
      state.length &&
      city.length &&
      pincode.length);
  };


  return <div className="flex flex-col gap-4">
    <div className="text-lg">Shipping Information</div>
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <input placeholder="First Name"
          className="e-text-field-with-border min-w-[5rem] w-full" name="firstName"
          value={firstName} onChange={(e) => onFormInputChange(e)} />
        <input placeholder="Last Name"
          className="e-text-field-with-border min-w-[5rem] w-full" name="lastName"
          value={lastName} onChange={(e) => onFormInputChange(e)} />
      </div>
      <input placeholder="Address"
        className="e-text-field-with-border min-w-[5rem]" name="address"
        value={address} onChange={(e) => onFormInputChange(e)} />
      <input placeholder="Apartment,suite,etc (Optional)"
        className="e-text-field-with-border min-w-[5rem]" name="apartment"
        value={apartment} onChange={(e) => onFormInputChange(e)} />
      <div className="flex flex-row gap-2">
        <input disabled placeholder="State"
          className="e-text-field-with-border min-w-[5rem] disabled:bg-slate-300" name="state"
          value={state} onChange={(e) => onFormInputChange(e)} />
        <input placeholder="City"
          className="e-text-field-with-border min-w-[5rem] disabled:bg-slate-300" name="city"
          value={city} disabled onChange={(e) => onFormInputChange(e)} />
        <input placeholder="PINCODE"
          className="e-text-field-with-border min-w-[5rem]" name="pincode"
          value={pincode} onChange={(e) => onFormInputChange(e)} />
      </div>

    </div>
    <button disabled={getButtonDisabledState()}onClick={(e) =>
      submitHandler(e, {firstName, lastName, address, apartment, state, city, pincode})}
    className="e-button-filled w-full"
    >Proceed to payment</button>
  </div>;
};

ShippingInformation.propTypes = {
  submitHandler: PropTypes.func,
};

export default ShippingInformation;
