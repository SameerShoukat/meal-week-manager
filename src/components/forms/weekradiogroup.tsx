import React from 'react';

interface Options {
  value: string; 
  label: string; 
}

interface ButtonRadioGroupProps {
  options: Options[]; 
  value: string; 
  setValue: (value: string) => void;
}

const ButtonRadioGroup: React.FC<ButtonRadioGroupProps> = ({ options, value, setValue }) => {
  return (
    <ul className="flex justify-between ">
      {options.map((option) => (
        <li key={option.value} className='w-full mx-2'>
          <label className={`week-btn ${value === option.value ? 'active' : ''}`}>
            <input
              type="radio"
              name="week" // Ensure all buttons belong to the same group
              value={option.value}
              checked={value === option.value}
              onChange={() => setValue(option.value)} // Update selection
              style={{ display: 'none' }} // Hide the radio input
            />
            {option.label}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ButtonRadioGroup;
