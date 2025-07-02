import React, {FC} from 'react';
import {Badge} from "@/components/ui/badge";
import Link from "next/link";

type Props = {
  genres: ({ name:string, id:number} | undefined)[];
  date: string;
}

const MovieGenresList:FC<Props> = ({genres, date}) => {

  return (
    <div className='flex gap-3'>
      {
        genres.map((genre, id) => (
          genre && <Link key={id} href={`/genre/${genre.id}`}>
            <Badge
              variant='secondary'
              className='bg-[rgba(109,106,103,.5)] px-3 py-1 rounded-2xl font-bold text-base'
            >
              {genre.name}
            </Badge>
          </Link>
        ))
      }
      <Badge variant='secondary' className='bg-[rgba(109,106,103,.5)] px-3 py-1 rounded-2xl font-bold text-base'>
        {date.slice(0, 4)}
      </Badge>
    </div>
  );
};
export default MovieGenresList;