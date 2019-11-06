import { ReactVideoPlay, VideoSourceType } from 'react-video-play';
import React from 'react';

export default () => {
  const src = [
    {
      name: '1080p',
      source: [
        {
          source: 'https://rholang.netlify.com/home/rchain-video.mp4',
          type: VideoSourceType.video_mp4,
        },
      ],
    },
  ];

  return <ReactVideoPlay sources={src} enableSlider={true} autoplay={true} />;
};
