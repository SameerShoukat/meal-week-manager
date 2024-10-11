import React, { ChangeEvent } from 'react';

interface DateSelectProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const DateSelect: React.FC<DateSelectProps> = ({ id, label, name, value, onChange, error }) => {
  // Generate an array of dates for the next 30 days
  const dates = Array.from({ length: 30 }, (_, i) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i); // Add i days to the current date
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Format as YYYY-MM-DD
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
        <option value="" disabled>Select a date</option>
        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
    </>
  );
};

export default DateSelect;
