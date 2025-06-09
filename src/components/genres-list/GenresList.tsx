import React, {FC} from 'react';

type Props = {
  genres: (string | undefined)[];
  date: string;
}

const GenresList:FC<Props> = ({genres, date}) => {
  return (
    <div className='flex gap-3'>
      {
        genres.map((genre, id) => (
        <div
          key={id}
          className='bg-[rgba(109,106,103,.5)] px-3 py-1 rounded-2xl font-bold'
        >
          {genre}
        </div>
        ))
      }
      <div className='bg-[rgba(109,106,103,.5)] px-3 py-1 rounded-2xl font-bold'>
        {date.slice(0, 4)}
      </div>
    </div>
  );
};
export default GenresList;