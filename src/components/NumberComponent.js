import React from 'react';

const NumberComponent = ({ Number, Color }) => {
  return (
    <div className="flex flex-col items-center">
      <span style={{ color: Color }} className="text-2xl font-bold">{Number}</span>
      <div 
        style={{ 
          backgroundColor: Color, 
          height: '4px', 
          width: '32px', 
          marginTop: '4px', 
          border: `2px solid ${Color}`,
          opacity: 1,
          display: 'block'
        }}
      ></div>
    </div>
  );
};

export default NumberComponent; 