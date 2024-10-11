import React, { ChangeEvent } from 'react';

interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  value?: string;
  error?: string;
  rows?: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ id, label, name, placeholder, value, onChange, error, rows  }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-1 text-[12px] font-medium text-gray-900 text-white"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 resize-none"
        value={value}
        onChange={onChange}
        rows={rows || 5}
      />
      {error && (
        <p className="text-red-500 text-[12px] mt-1">{error}</p>
      )}
    </>
  );
};

export default TextArea;
