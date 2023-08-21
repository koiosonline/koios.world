'use client';

import { useState } from 'react';
import { YouTubeEmbed } from '../YouTube/YouTubeEmbed';
import { getYoutubeEmbedId } from '../YouTube/helpers/getYouTubeEmbedId';
import { useSizes } from '../utils/useSizes';
import { NavigationItem, VideoPlayerNavigationList } from './VideoPlayerNavigationList';
import defaultTheme from 'tailwindcss/defaultTheme';

type VideoPlayerProps = {
  YouTubeUrl?: string | null;
  NavigationList?: NavigationItem[];
  NavigationListSubtitle?: string;
  NavigationListTitle?: string;
};

export const VideoPlayer = (props: VideoPlayerProps) => {
  const { YouTubeUrl, NavigationList, NavigationListSubtitle, NavigationListTitle } = props;
  const YouTubeEmbedId = YouTubeUrl ? getYoutubeEmbedId(YouTubeUrl) : undefined;
  const [isEnded, setIsEnded] = useState<boolean>(false);

  const size = useSizes();
  const isMobile = size.width < parseInt(defaultTheme.screens.lg);

  return (
    <div className="flex flex-col shrink-0 lg:flex-row">
      {YouTubeEmbedId && <section className="w-full">{<YouTubeEmbed embedId={YouTubeEmbedId} hasEnded={setIsEnded} />}</section>}

      {NavigationList && NavigationList.length > 0 && (
        <VideoPlayerNavigationList
          items={NavigationList}
          title={NavigationListTitle}
          subtitle={NavigationListSubtitle}
          fullWidth={isMobile || !YouTubeEmbedId}
          isEnded={isEnded}
        />
      )}
    </div>
  );
};
