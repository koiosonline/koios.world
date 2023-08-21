'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: any; 
    onYouTubeIframeAPIReady?: () => void;
  }
}

type YouTubeEmbedProps = {
  embedId: string;
  hasEnded?: (hasEnded: boolean) => void;
};

export const YouTubeEmbed = (props: YouTubeEmbedProps) => {
  const { embedId, hasEnded } = props;
  const playerRef = useRef<any>(null);

  const onYouTubeIframeAPIReady = () => {

      playerRef.current = new window.YT.Player('player', {
        width: '853',
        height: '480',
        videoId: embedId,
        playerVars: {
          playsinline: 1
        },
        events: {
          onStateChange: onPlayerStateChange
        }
      });
  };


  const onPlayerStateChange = (event: any) => {
    if (event.data === window.YT?.PlayerState?.ENDED) {
      // Do something when the video ends
      console.log('Video ended');
      if (hasEnded) {
        hasEnded(true);
      }
    }
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.loadVideoById(embedId);
    } else {
      // Load the YouTube API script
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }

      // Attach the YouTube API callback to the window after the script loads
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    // Clean up the effect
    return () => {
      window.onYouTubeIframeAPIReady = undefined; // Remove the property assignment
      window.YT = undefined; // Remove the YT object
    };
  }, []);

  // The <iframe> (and video player) will replace the <div> tag
  return (
    <div className="overflow-hidden relative h-0 pb-[56.25%] shrink-0">
      <div id="player" className="left-0 top-0 h-full w-full absolute" />
    </div>
  );
};
