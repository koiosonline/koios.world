'use client';

import { useQuery } from '@apollo/client';
import { Typography, VideoPlayer } from '@frontend/jsx-core';
import {
  GetSubchapterDocument,
  GetSubchaptersOfChapterDocument,
  GetSubchaptersOfLevelAndCourseDocument
} from 'apps/platform/src/Level/components/graphql/operations.content.generated';
import { transformToVideoPlayerNavigationList } from 'apps/platform/src/Level/transformers/transformToVideoPlayerNavigationList';
import { Markdown } from 'apps/platform/src/Markdown/Markdown';
import { redirect, useParams } from 'next/navigation';

const Page = () => {
  const params = useParams();
  const [book, chapter, video] = params.level.split('/');

  // Get lesson content
  const { loading, error, data } = useQuery(GetSubchapterDocument, {
    variables: {
      filters: {
        slug: {
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
          slug: {
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
        slug: {
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
      redirect(`/${params.lang}/courses/${params.course}/${params.level}/${subchapter.slug}`);
    }
  }

  // If no chapter, redirect to first video in first chapter of level
  if (!chapter) {
    const chapter = subchaptersOfLevelData?.courses?.data[0].attributes?.levels?.data[0].attributes?.chapters?.data[0].attributes;
    if (chapter) {
      redirect(`/${params.lang}/courses/${params.course}/${params.level}/${chapter.slug}/${chapter.subchapters?.data[0].attributes?.slug}`);
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
        NavigationListSubtitle={'course'}
        NavigationListTitle={params.course}
        NavigationList={contentList}
      />

      <section className="container max-w-3xl mt-10">
        <Typography component="h1" variant='h2'>{content.Name}</Typography>

        {content.Literature && (
          <Markdown value={content.Literature} />
          /* <TableOfContents value={content.Literature} /> */
        )}
      </section>
    </>
  );
};

export default Page;
