import React, { ChangeEvent } from 'react';

interface TimeSelectProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const TimeSelect: React.FC<TimeSelectProps> = ({ id, label, name, value, onChange, error }) => {
  // Generate an array of time options in 30-minute intervals
  const times = Array.from({ length: 48 }, (_, i) => {
    const hours = String(Math.floor(i / 2)).padStart(2, '0');
    const minutes = i % 2 === 0 ? '00' : '30';
    return `${hours}:${minutes}`;
  });

  return (
    <>
      <label
        htmlFor={id}
        className="block mb-1 text-[12px] font-medium text-gray-900 text-white"
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
        <option value="" disabled>Select a time</option>
        {times.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
    </>
  );
};

export default TimeSelect;
