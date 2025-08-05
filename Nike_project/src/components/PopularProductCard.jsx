import React from 'react';
import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, Price, rating }) => {
  const randomRating = (Math.random() * 1.5 + 3.5).toFixed(1); // generates rating between 3.5 and 5.0
  const displayRating = rating || randomRating;

  return (
    <div className="flex flex-col items-start w-fit">
      <img
        src={imgURL}
        alt={name}
        className="w-[500px] h-[280px] object-cover rounded-xl hover:scale-105
         transition-transform duration-800 hover:border-coral-red hover:border-2 hover:transition hover:duration-300"
      />

      <div className="mt-4 flex items-center gap-2">
        <img src={star} alt="rating" width={20} height={20} />
        <p className="font-mono text-lg text-white">{displayRating}</p>
      </div>

      <h3 className="mt-2 text-xl font-semibold font-mono text-white">{name}</h3>
      <p className="mt-1 text-xl font-bold font-mono text-white">{Price}</p>
    </div>
  );
};

export default PopularProductCard;
