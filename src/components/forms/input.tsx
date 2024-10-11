import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  label : string;
  error? : string;
  value?: string;
  ref? : string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, name, type, placeholder, value, onChange, error, ref }) => {
  return (
    <>
        <label
          htmlFor={id}
          className="block mb-1 text-[12px] font-medium text-gray-900 text-white"
        >
         {label}
        </label>
        <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
         {error && (
          <p className="text-red-500 text-[12px] mt-1">{error}</p>
        )}
    </>
  );
};

export default InputField;
