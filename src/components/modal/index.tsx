import React from 'react';


interface modalProps {
    isModalOpen :  boolean;
    children : React.ReactNode
  }

const StyleModal:React.FC<modalProps> = ({isModalOpen, children}) => {
  return (
    <div className="relative z-10 flex items-center justify-center">
      {/* Modal Background Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          {/* Modal Content */}
          {children}
     
        </div>
      )}
    </div>
  );
};

export default StyleModal;
