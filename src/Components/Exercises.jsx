import React, { useState } from 'react';
import { data } from '../data/data.js';

const Exercises = () => {
    //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className=' font-bold text-4xl text-center'>
      <span className= 'text-purple-600'>Popular      </span><span className= 'text-blue-400'>Exercises</span>
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('arms')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              Arms
            </button>
            <button
              onClick={() => filterType('legs')}
              className='m-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
            >
              Legs
            </button>
            <button
              onClick={() => filterType('back')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              Chest
            </button>
            <button
              onClick={() => filterType('chest')}
              className='m-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
            >
              Chest
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-2 rounded-full'>
                  {item.recommendedLoad}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Exercises;