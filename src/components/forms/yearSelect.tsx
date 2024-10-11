import React, { ChangeEvent } from 'react';

interface YearSelectProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const YearSelect: React.FC<YearSelectProps> = ({ id, label, name, value, onChange, error }) => {
  // Generate an array of years for the select options
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <>
      <label
        htmlFor={id}
        className="block mb-1 text-[12px] font-medium text-gray-900 text-white uppercase"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>Select a year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
    </>
  );
};

export default YearSelect;
