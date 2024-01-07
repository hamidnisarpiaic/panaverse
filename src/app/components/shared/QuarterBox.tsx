import React, { FC } from 'react';

interface IProps {
  header: string;
  description: string;
  number: number;
  haveborder?: boolean;
}

const QuarterBox: FC<IProps> = ({ header, description, number, haveborder = true }) => {
  return (
    <div className={`rounded-md flex-1 relative flex flex-col justify-center mb-6 md:mb-0 ${haveborder && 'border'}`}>
      <h4 className="font-bold text-lg">{header}</h4>
      <p className="mt-2 text-slate-600">{description}</p>
      <div className="absolute -top-8 right-10 text-[170px] font-bold text-8xl text-gray-200 -z-10">
        {number}
      </div>
    </div>
  );
};

export default QuarterBox;
