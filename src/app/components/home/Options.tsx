'use client';
import { useActions } from '@/app/hooks/useActions';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import React from 'react';
import { optionsList } from './data';
import cn from 'classnames';
import Image from 'next/image';

const Options = () => {
  const { selectedOption, travelTime } = useTypedSelector((state) => state.taxi);
  const { setSelectedOption } = useActions();

  return (
    <div className='flex overflow-x-auto hide-scroll-bar my-5'>
      <div className='flex flex-nowrap'>
        {optionsList.map((option) => (
          <button
            className='inline-block rounded-xl py-2 px-4 outline-none mr-4 bg-white overflow-hidden'
            onClick={() => setSelectedOption(option._id)}
            style={{ minWidth: 105 }}
            key={option._id}
          >
            <div
              className={ selectedOption === option._id ?'opacity-100 text-left transition-opacity duration-300 ease-in-out'
                :'opacity-50 text-left transition-opacity duration-300 ease-in-out'
              }
               
            
            >
              <Image src={option.img} alt={option.title} width={50} height={50} />
              <div className='text-sm mt-1' style={{ color: '#222' }}>
                {option.title}
              </div>
              <div className='text-md font-medium' style={{ color: '#222' }}>
                $
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;