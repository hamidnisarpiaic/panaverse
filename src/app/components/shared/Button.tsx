import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button className="bg-blue-500 text-white font-semibold rounded-full px-7 py-4 hover:scale-105 duration-300 hover:shadow-lg">
        {text}
      </button>
    </div>
  );
};

export default Button;
