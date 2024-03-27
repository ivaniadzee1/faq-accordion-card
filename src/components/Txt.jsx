import React, { useState } from 'react';

const Txt = ({ h1, p, show, setShow, number, img }) => {
  return (
    <div className="flex flex-col items-center mt-[35px]">
      <div className="flex items-cente "> 
        <h1
          onClick={() => {
            if (show === number) {
              setShow(null);
            } else {
              setShow(number);
            }
          }}
          className="mr-2  text-base text-gray-700"
        >
          {h1}
        </h1>
        <img src={img} alt="" className="h-auto max-w-[100px] ml-2" /> 
      </div>
      {show === number && <p className="ml-[-20px] w-[279px] text-gray-700 opacity-70  text-sm" >{p}</p>}
      <p className='w-[300px] h-[1px] mt-[10px] bg-gray-200'></p>
    </div>
  );
};

export default Txt;
