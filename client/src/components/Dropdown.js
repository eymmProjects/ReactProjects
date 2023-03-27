import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Dropdown</span>
        <svg
          className="fill-current h-4 w-4 ml-2"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 14l6-6H4l6 6z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 bg-gray-100 py-2 mt-1 rounded-md shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
          >
            Option 3
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
