'use client';

import { useQuery } from '@apollo/client';
import { LoaderBox, Typography } from '@frontend/jsx-core';
import { CourseLevelAccordion } from 'apps/platform/src/Course/components/CourseLevelAccordion';
import { GetCourseDocument } from 'apps/platform/src/Course/components/graphql/operations.content.generated';
import { transformToCourseLevel } from 'apps/platform/src/Course/transformers/transformToCourseLevels';
import { ErrorBox } from 'apps/platform/src/shared/Error/ErrorBox';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { TranslatedString } from 'apps/platform/src/I18N/components/TranslatedString';
import { BorderedBlock } from 'apps/platform/src/Course/components/BorderedBlock';
import { Markdown } from 'apps/platform/src/RichContent/Markdown';

const Page = () => {
  const params = useParams();
  const currentCourse = params.course;
  const { loading, error, data } = useQuery(GetCourseDocument, {
    variables: {
      filters: {
        Slug: {
          eq: currentCourse
        }
      }
    }
  });
  const course = data?.courses?.data[0].attributes;
  const levels = transformToCourseLevel(course?.levels?.data || []);

  if (loading) return <LoaderBox />;
  if (error) return <ErrorBox />;
  if (!course)
    return (
      <ErrorBox
        title={<TranslatedString id="course.page.error.not-found.title" />}
        description={<TranslatedString id="course.page.error.not-found.description" />}
      />
    );

  return (
    <>
      <div className="relative pb-[30.25%]">
        <Image
          src={course.Banner?.data?.attributes?.url || '/images/placeholder.png'}
          alt={course.Banner?.data?.attributes?.alternativeText || 'Course banner'}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full p-0.5 object-cover absolute"
          priority
        />
      </div>

      <div className="container max-w-4xl mt-10 pb-10">
        <Typography component="h1" variant="h3">
          {course.Name}
        </Typography>

        {course.Description && (
          <BorderedBlock className="mt-4">
            <Typography component="h2" variant="h4">
              <TranslatedString id="courses.page.overview.label" />
            </Typography>

            <div className="rich-article"><Markdown value={course.Description} openExternalLinksInNewTab /></div>
          </BorderedBlock>
        )}

        {levels && <CourseLevelAccordion levels={levels} />}
      </div>
    </>
  );
};

export default Page;
