import React from "react";

interface MyProps {
  action?: () => void;
  value: string;
  type: "button" | "submit" | "reset"; // You can define more specific types for 'type'
  design?: string; // Although 'width' is not being used, you can use it for inline styles or Tailwind classes
}

const StyleButton: React.FC<MyProps> = ({ value, type, design, action }) => {
  return (
    <button
      type={type}
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[12px] px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 mx-auto ${design} w-full block mt-[40px] cursor-pointer`}
      onClick={action}
    >
      {value}
    </button>
  );
};

export default StyleButton;
