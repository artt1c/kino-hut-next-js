import React, {FC} from 'react';
import {IVideos} from "@/model/IMovieFull";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {ImageIcon} from "lucide-react";
import "swiper/css";
import YoutubeVideo from "@/components/yuotube-video/YoutubeVideo";

type Props = {
  videoInfo: IVideos;
}

const MovieVideosCard:FC<Props> = ({videoInfo}) => {
  return (
    <Card>
      <Tabs defaultValue="related">

        <CardHeader className='flex justify-between'>
          <TabsList>
            <TabsTrigger value="movie">Movie</TabsTrigger>
            <TabsTrigger value="related">Related videos</TabsTrigger>
          </TabsList>

        </CardHeader>

        <CardContent className='w-full'>
          <div className='aspect-video rounded-xl border'>

            <TabsContent value="related" className='h-full flex justify-center items-center'>
              <YoutubeVideo videoInfo={videoInfo}/>
            </TabsContent>

            <TabsContent value="movie" className='h-full flex justify-center items-center'>
              <ImageIcon className='size-64 opacity-35'/>
            </TabsContent>

          </div>
        </CardContent>

      </Tabs>
    </Card>
  );
};

export default MovieVideosCard;