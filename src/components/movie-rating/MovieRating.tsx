'use client'

import React, {FC} from 'react';
import {Rating} from "@mui/material";

type Props = {
  rating: number;
}

const MovieRating:FC<Props> = ({rating}) => {


  return (
    <div className='flex items-center mb-8 bg-gray-500 py-1 px-3 rounded-2xl w-fit'>
      <Rating
        name="simple-controlled"
        className=''
        value={rating/2}
        onChange={(event, newValue) => {
          console.log(newValue);
        }}
      />
      <span className='font-bold opacity-80np'>
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default MovieRating;