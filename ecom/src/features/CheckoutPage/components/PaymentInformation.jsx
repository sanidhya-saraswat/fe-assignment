
import React, {useState, Fragment} from 'react';
import {Listbox} from '@headlessui/react';
import {AiOutlineCheck} from 'react-icons/ai';

const PaymentInformation = ({submitHandler}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [month, setMonth] = useState('January');
  const [year, setYear] = useState('2025');
  const [cvv, setCVV] = useState('');
  const months = ['January', 'Febuary', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const onFormInputChange = async (e) => {
    if (e.target.name == 'name') setName(e.target.value);
    else if (e.target.name == 'number') setNumber(e.target.value);
    else if (e.target.name == 'month') setMonth(e.target.value);
    else if (e.target.name == 'year') setYear(e.target.value);
    else if (e.target.name == 'cvv') setCVV(e.target.value);
  };

  const getButtonDisabledState = () => {
    return !(name.length &&
      number.length &&
      month.length &&
      year.length &&
      cvv.length);
  };


  return <div className="flex flex-col gap-4">
    <div className="text-lg">Payment Information</div>
    <div className="flex flex-col gap-2">
      <input placeholder="Cardholder Name"
        className="e-text-field-with-border min-w-[5rem] w-full" name="name"
        value={name} onChange={(e) => onFormInputChange(e)} />
      <input placeholder="Card Number"
        className="e-text-field-with-border min-w-[5rem]" name="number"
        value={number} onChange={(e) => onFormInputChange(e)} />
      <div className="flex flex-row gap-2">
        <Listbox value={month} onChange={setMonth}>
          <Listbox.Button className="bg-transparent h-9 focus:outline-none
          border-2 border-slate-300 p-1 pl-2 pr-2">{month}</Listbox.Button>
          <Listbox.Options className="absolute z-10">
            {months.map((monthStr) => (
              <Listbox.Option as={Fragment}
                key={monthStr}
                value={monthStr}
              >
                {({active, selected}) => (
                  <li
                    className={`${active ? 'bg-slate-500 shadow p-1 pr-2 pl-2 text-white' :
                    'bg-white shadow p-1 pr-2 pl-2'
                    }`}
                  >
                    <div className="flex flex-row justify-between items-center gap-2 w-full">
                      <span>{monthStr}</span>
                      <span>{selected && <AiOutlineCheck />}</span>
                    </div>
                  </li>)}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <input placeholder="Year"
          className="e-text-field-with-border min-w-[5rem] disabled:bg-slate-300" name="year"
          value={year} onChange={(e) => onFormInputChange(e)} />
        <input placeholder="CVV"
          className="e-text-field-with-border min-w-[5rem]" name="cvv"
          value={cvv} onChange={(e) => onFormInputChange(e)} />
      </div>
    </div>
    <button disabled={getButtonDisabledState()}
      onClick={(e) => submitHandler(e, {name, number, month, year, cvv})}
      className="e-button-filled w-full"
    >Pay with card</button>
  </div>;
};

export default PaymentInformation;
