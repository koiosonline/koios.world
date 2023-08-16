'use client';

import { useParams, useRouter } from 'next/navigation';
import { Typography } from '../Typography/Typography';
import { Icon } from '../Icon/Icon';
import { store } from '../utils/useStorage';
import { useState } from 'react';

type NavigationItemSubchapters = {
  name: string;
  slug: string;
};

export type NavigationItem = {
  chapter: string;
  chapterSlug: string;
  subchapters: NavigationItemSubchapters[];
};

type VideoPlayerNavigationListProps = {
  items: NavigationItem[];
  subtitle?: string;
  title?: string;
  fullWidth?: boolean;
};

export const VideoPlayerNavigationList = (props: VideoPlayerNavigationListProps) => {
  const { items, subtitle, title, fullWidth } = props;
  const router = useRouter();
  const params = useParams();
  const course = params.course;
  const [level, chapter, subchapter] = params.level.split('/');
  const [videoCheck, setVideoCheck] = useState<boolean>(false); // used to force rerender of component after (un)checking video

  const handleLinkClick = (newSubchapterSlug: string, newChapter: string) => {
    const currentSubchapterSlug = `/${level}/${chapter}/${subchapter}`;
    const clickedSubchapterSlug = `/${level}/${chapter}/${newSubchapterSlug}`;

    if (currentSubchapterSlug !== clickedSubchapterSlug) {
      router.push(`/courses/${course}/${level}/${newChapter}/${newSubchapterSlug}`);
    }
  };

  const handleFinishedSubchapter = (e: React.MouseEvent, subchapterSlug: string) => {
    e.stopPropagation();

    if (store.getJson(subchapterSlug)) {
      store.remove(subchapterSlug);
      setVideoCheck((prevVideoCheck) => !prevVideoCheck);
    } else {
      store.setJson(subchapterSlug, { hash: `/${subchapterSlug}`, videoId: subchapterSlug });
      store.setJson('lastWatched', {
        course: course,
        level: level,
        chapter: chapter,
        subchapter: `/${subchapterSlug}`
      });
      setVideoCheck((prevVideoCheck) => !prevVideoCheck);
    }
  };

  return (
    <section className={`w-2/5 bg-contrast-900 text-neutral-50 flex flex-col ${fullWidth ? 'w-full h-72' : ''}`}>
      {(title || subtitle) && (
        <div className="px-4 py-6 border-b-2">
          {subtitle && (
            <Typography variant="subtitle2" className="-mb-1 font-normal">
              {subtitle}
            </Typography>
          )}
          {title && (
            <Typography component="h2" variant="body1" className="text-neutral-50 font-semibold normal-case">
              {title}
            </Typography>
          )}
        </div>
      )}

      <div className="relative overflow-y-auto flex-1">
        <ul className="absolute top-0 right-0 left-0 h-full ">
          {items.map((item) => (
            <li key={item.chapter}>
              <Typography component="h3" variant="subtitle1" className=" normal-case mt-4 mb-2 font-semibold mx-4">
                {item.chapter}
              </Typography>

              <ul>
                {item.subchapters.map((subchapter) => (
                  <li
                    onClick={() => handleLinkClick(subchapter.slug, item.chapterSlug)}
                    key={subchapter.name}
                    className={`bg-contrast-950 px-4 py-4 cursor-pointer flex items-center hover:bg-contrast-950/50 transition-all duration-200 ease-in-out 
                    ${store.getJson(subchapter.slug) ? 'opacity-50' : ''} 
                  }
                    `}
                  >
                    <span onClick={(e) => handleFinishedSubchapter(e, subchapter.slug)}>
                      <Icon name="check-in-circle" className="mr-4 shrink-0 hover:opacity-50 transition-opacity duration-200 ease-in-out" />
                    </span>
                    <Typography variant="subtitle1" className="normal-case font-normal">
                      {subchapter.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
