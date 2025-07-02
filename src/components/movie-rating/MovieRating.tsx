'use client'

import React, {FC, useState} from 'react';
import {Rating} from "@mui/material";

type Props = {
  rating: number;
}

const MovieRating:FC<Props> = ({rating}) => {

  const [userRating, setUserRating] = useState<number>(rating/2)

  return (
    <div className='flex items-center mb-8 bg-[rgba(109,106,103,.5)] py-1 px-3 rounded-2xl w-fit'>
      <Rating
        className='mr-3'
        name="full-stars-only"
        value={userRating}
        defaultValue={rating/2}
        precision={0.5}
        sx={{
          '& .MuiRating-iconFilled': {
            color: '#FFFDFFFF',
          },
          '& .MuiRating-iconEmpty': {
            color: '#FFFDFFFF',
          }
        }}
        onChange={(_, newValue) => {
          if (newValue) {
            setUserRating(newValue)
          }
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