'use client'

import React, {FC} from 'react';
import {IVideos} from "@/model/IMovieFull";

type Props = {
  videoInfo: IVideos;
}

const YoutubeVideo:FC<Props> = ({videoInfo}) => {
  return (
    <>
      <iframe className='w-full h-full aspect-video rounded-xl' width="1516" height="852" src={`https://www.youtube.com/embed/${videoInfo.results[0].key}`}
              title="YouTube video player"
              allowFullScreen></iframe>
    </>
  );
};

export default YoutubeVideo;