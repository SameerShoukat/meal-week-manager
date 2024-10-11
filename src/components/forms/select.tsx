import React, { ChangeEvent } from 'react';

interface SelectFieldProps {
  id: string;
  value: string;
  name: string;
  label: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({ id, name, value, label, onChange, options,error }) => {
  return (
    <>
        <label
          htmlFor={id}
          className="block mb-1 text-[12px] font-medium text-gray-900 text-white uppercase"
        >{label}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="" disabled>
        Select  {name}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && (
          <p className="text-red-500 text-[12px] mt-1">{error}</p>
        )}
    </>
  );
};

export default SelectField;
