'use client';

import { useParams, useRouter } from 'next/navigation';
import { Typography } from '../Typography/Typography';
import { Icon } from '../Icon/Icon';
import { store } from '../utils/useStorage';
import { useEffect, useState } from 'react';

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
  isEnded?: boolean;
};

export const VideoPlayerNavigationList = (props: VideoPlayerNavigationListProps) => {
  const { items, subtitle, title, fullWidth, isEnded } = props;
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

  const handleFinishedSubchapter = (subchapterSlug: string, e?: React.MouseEvent) => {
    e?.stopPropagation();

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

  // Scroll to active subchapter
  useEffect(() => {
    const activeSubchapterItem = document.getElementById(subchapter);
    const subchapterList = document.getElementById('subchapter-list');

    if (activeSubchapterItem && subchapterList) {
      const offset = activeSubchapterItem.offsetTop - 100;
      subchapterList.scrollTop = offset;
    }
  }, [subchapter]);

  // Set subchapter as watched if video has ended
  useEffect(() => {
    if (isEnded) {
      handleFinishedSubchapter(subchapter);
    }
  }, [isEnded]);

  return (
    <section className={`w-2/5 bg-contrast-900 text-neutral-50 flex flex-col ${fullWidth ? 'w-full h-72' : ''}`}>
      {(title || subtitle) && (
        <div className="px-4 py-6 border-b-2">
          {subtitle && (
            <Typography className="-mb-1 font-normal text-[0.7rem] uppercase">
              {subtitle}
            </Typography>
          )}
          {title && (
            <Typography component="h2" className="text-neutral-50 font-semibold normal-case">
              {title}
            </Typography>
          )}
        </div>
      )}

      <div id="subchapter-list" className="relative overflow-y-auto flex-1">
        <ul className="absolute top-0 right-0 left-0 h-full ">
          {items.map((item) => (
            <li key={item.chapter}>
              <Typography component="h3" variant="subtitle1" className=" normal-case mt-4 mb-2 font-semibold mx-4">
                {item.chapter}
              </Typography>

              <ul>
                {item.subchapters.map((subchapterItem) => (
                  <li
                    id={subchapterItem.slug}
                    onClick={() => handleLinkClick(subchapterItem.slug, item.chapterSlug)}
                    key={subchapterItem.name}
                    className={`bg-contrast-950 px-4 py-4 cursor-pointer flex items-center hover:bg-neutral-400 transition-all duration-200 ease-in-out 
                    ${store.getJson(subchapterItem.slug) ? 'opacity-50' : ''}
                    ${subchapterItem.slug === subchapter ? ' bg-neutral-400' : ''}
                    `}
                  >
                    <span onClick={(e) => handleFinishedSubchapter(subchapterItem.slug, e)}>
                      <Icon name="check-in-circle" className="mr-4 shrink-0 hover:opacity-50 transition-opacity duration-200 ease-in-out" />
                    </span>
                    <Typography variant="subtitle1" className="normal-case font-normal">
                      {subchapterItem.name}
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
