'use client';

import { useQuery } from '@apollo/client';
import { VideoPlayer } from '@frontend/jsx-core';
import {
  GetSubchapterDocument,
  GetSubchaptersOfChapterDocument,
  GetSubchaptersOfLevelAndCourseDocument
} from 'apps/platform/src/Level/components/graphql/operations.content.generated';
import { transformToVideoPlayerNavigationList } from 'apps/platform/src/Level/transformers/transformToVideoPlayerNavigationList';
import { Markdown } from 'apps/platform/src/RichContent/Markdown';
import { redirect, useParams } from 'next/navigation';

const Page = () => {
  const params = useParams();
  const [book, chapter, video] = params.level.split('/');

  // Get lesson content
  const { loading, error, data } = useQuery(GetSubchapterDocument, {
    variables: {
      filters: {
        Slug: {
          eq: video
        }
      }
    },
    skip: !video
  });

  // Get subchapters of chapter
  const {
    loading: subchaptersLoading,
    error: subchaptersError,
    data: subchaptersData
  } = useQuery(GetSubchaptersOfChapterDocument, {
    variables: {
      filters: {
        chapter: {
          Slug: {
            eq: chapter
          }
        }
      }
    },
    skip: !chapter || !!video
  });

  // Get subchapters of level
  const {
    loading: subchaptersOfLevelLoading,
    error: subchaptersOfLevelError,
    data: subchaptersOfLevelData
  } = useQuery(GetSubchaptersOfLevelAndCourseDocument, {
    variables: {
      filters: {
        Slug: {
          eq: params.course
        }
      },
      levelsFilters2: {
        Slug: {
          eq: book
        }
      }
    },
    skip: !!chapter
  });

  const content = data?.subchapters?.data[0].attributes;
  const contentList = transformToVideoPlayerNavigationList(content?.chapter?.data);

  // If no video, redirect to first video in chapter
  if (!video) {
    const subchapter = subchaptersData?.subchapters?.data[0].attributes;
    if (subchapter) {
      redirect(`/${params.lang}/courses/${params.course}/${params.level}/${subchapter.Slug}`);
    }
  }

  // If no chapter, redirect to first video in first chapter of level
  if (!chapter) {
    const chapter = subchaptersOfLevelData?.courses?.data[0].attributes?.levels?.data[0].attributes?.chapters?.data[0].attributes;
    if (chapter) {
      redirect(`/${params.lang}/courses/${params.course}/${params.level}/${chapter.Slug}/${chapter.subchapters?.data[0].attributes?.Slug}`);
    }
  }

  if (error || subchaptersError || subchaptersOfLevelError)
    return <p>Error: {error?.message || subchaptersError?.message || subchaptersOfLevelError?.message}</p>;

  if (loading || subchaptersLoading || subchaptersOfLevelLoading) return <p>Loading...</p>;

  if (!content) return <p>Lesson not found</p>;

  return (
    <>
      <VideoPlayer
        YouTubeUrl={content.YouTubeURL}
        NavigationListSubtitle={'Course'}
        NavigationListTitle={params.course}
        NavigationList={contentList}
      />

      <section className="container max-w-3xl rich-article pb-10">
        {content.Literature && (
          <Markdown value={content.Literature} openExternalLinksInNewTab />
          /* <TableOfContents value={content.Literature} /> */
        )}
      </section>
    </>
  );
};

export default Page;
