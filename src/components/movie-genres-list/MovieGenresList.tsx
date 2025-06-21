import React, {FC} from 'react';
import {Badge} from "@/components/ui/badge";

type Props = {
  genres: (string | undefined)[];
  date: string;
}

const MovieGenresList:FC<Props> = ({genres, date}) => {
  return (
    <div className='flex gap-3'>
      {
        genres.map((genre, id) => (
        <Badge
          key={id}
          variant='secondary'
          className='bg-[rgba(109,106,103,.5)] px-3 py-1 rounded-2xl font-bold text-base'
        >
          {genre}
        </Badge>
        ))
      }
      <Badge variant='secondary' className='bg-[rgba(109,106,103,.5)] px-3 py-1 rounded-2xl font-bold text-base'>
        {date.slice(0, 4)}
      </Badge>
    </div>
  );
};
export default MovieGenresList;