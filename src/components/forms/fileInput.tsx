import React, { ChangeEvent } from 'react';

interface FileInputFieldProps {
  id: string;
  name: string;
  label: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileInputField: React.FC<FileInputFieldProps> = ({ id, name, label, onChange, error }) => {
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
        name={name}
        type="file"
        accept="application/pdf,image/*" // Accept PDF and image files
        className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
    </>
  );
};

export default FileInputField;
