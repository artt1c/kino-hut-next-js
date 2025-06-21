import React from 'react';
import {Copyright} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <hr className='my-6'/>
      <footer className='mx-auto py-10 w-full flex justify-around bg-(--background-transparent) rounded-4xl'>
        <div className='flex items-center gap-1.5 opacity-60'>
          <Copyright className='size-4'/>
          2025,
          <Link href='https://github.com/artt1c/kino-hut-next-js'>artt1c</Link>
        </div>
        <div className='opacity-60'>
          This product uses the <Link href='https://www.themoviedb.org' className='!underline'>TMDB</Link> API but is not endorsed or certified by TMDB.
        </div>
      </footer>
    </>
  );
};

export default Footer;