import { YouTubeEmbed } from '../YouTube/YouTubeEmbed';
import { getYoutubeEmbedId } from '../YouTube/helpers/getYouTubeEmbedId';
import { NavigationItem, VideoPlayerNavigationList } from './VideoPlayerNavigationList';

type VideoPlayerProps = {
  YouTubeUrl?: string | null;
  NavigationList?: NavigationItem[];
  NavigationListSubtitle?: string;
  NavigationListTitle?: string;
};

export const VideoPlayer = (props: VideoPlayerProps) => {
  const { YouTubeUrl, NavigationList, NavigationListSubtitle, NavigationListTitle } = props;
  const YouTubeEmbedId = YouTubeUrl ? getYoutubeEmbedId(YouTubeUrl) : undefined;

  return (
    <div className="flex">
      <section className="w-full">{YouTubeEmbedId && <YouTubeEmbed embedId={YouTubeEmbedId} />}</section>

      {NavigationList && NavigationList.length > 0 && (
        <VideoPlayerNavigationList items={NavigationList} title={NavigationListTitle} subtitle={NavigationListSubtitle} />
      )}
    </div>
  );
};
