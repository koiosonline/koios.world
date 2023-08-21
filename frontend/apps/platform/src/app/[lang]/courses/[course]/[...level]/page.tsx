'use client';

import { useQuery } from '@apollo/client';
import { LoaderBox, VideoPlayer } from '@frontend/jsx-core';
import { TranslatedString } from 'apps/platform/src/I18N/components/TranslatedString';
import { FurtherReadings } from 'apps/platform/src/Level/components/FurtherReadings';
import {
  GetSubchapterDocument,
  GetSubchaptersOfChapterDocument,
  GetSubchaptersOfLevelAndCourseDocument
} from 'apps/platform/src/Level/components/graphql/operations.content.generated';
import { transformToVideoPlayerNavigationList } from 'apps/platform/src/Level/transformers/transformToVideoPlayerNavigationList';
import { Markdown } from 'apps/platform/src/RichContent/Markdown';
import { ErrorBox } from 'apps/platform/src/shared/Error/ErrorBox';
import { redirect, useParams } from 'next/navigation';

const Page = () => {
  const params = useParams();
  const [book, chapter, subchapter] = params.level.split('/');

  // Get subchapter
  const { loading, error, data } = useQuery(GetSubchapterDocument, {
    variables: {
      filters: {
        Slug: {
          eq: subchapter
        }
      },
      pagination: {
        limit: 50
      }
    },
    skip: !subchapter
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
    skip: !chapter || !!subchapter
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

  const content = data?.subchapters?.data[0]?.attributes;
  const contentList = transformToVideoPlayerNavigationList(content?.chapter?.data);
  const isLoading = loading || subchaptersLoading || subchaptersOfLevelLoading;
  const isError = error || subchaptersError || subchaptersOfLevelError;
  const isNotFound = !content;

  // If no subchapter, redirect to first subchapter of current chapter
  if (!subchapter) {
    const firstSubchapter = subchaptersData?.subchapters?.data[0]?.attributes;
    if (firstSubchapter) {
      redirect(`/${params.lang}/courses/${params.course}/${params.level}/${firstSubchapter.Slug}`);
    }
  }

  // If no chapter, redirect to first video in first chapter of level
  if (!chapter) {
    console.log('triggered chapter redirect')
    const firstChapter = subchaptersOfLevelData?.courses?.data[0].attributes?.levels?.data[0].attributes?.chapters?.data[0]?.attributes;
    if (firstChapter) {
      redirect(
        `/${params.lang}/courses/${params.course}/${params.level}/${firstChapter.Slug}/${firstChapter.subchapters?.data[0]?.attributes?.Slug}`
      );
    }
  }

  if (isError) return <ErrorBox />;
  if (isLoading) return <LoaderBox />;
  if (isNotFound)
    return (
      <ErrorBox
        title={<TranslatedString id="subchapter.page.error.not-found.title" />}
        description={<TranslatedString id="subchapter.page.error.not-found.description" />}
      />
    );

  return (
    <>
      <VideoPlayer
        YouTubeUrl={content.YouTubeURL}
        NavigationListSubtitle={'Course'}
        NavigationListTitle={params.course}
        NavigationList={contentList}
      />

      <section className="container max-w-3xl rich-article mb-8">
        {content.Literature && (
          <Markdown value={content.Literature} openExternalLinksInNewTab />
          /* <TableOfContents value={content.Literature} /> */
        )}
      </section>

      <section className="container max-w-3xl pb-20">
        <FurtherReadings items={content.FurtherReadings} />
      </section>
    </>
  );
};

export default Page;
