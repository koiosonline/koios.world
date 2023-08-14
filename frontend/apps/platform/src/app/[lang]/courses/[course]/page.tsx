'use client';

import { useQuery } from '@apollo/client';
import { LoaderBox, Typography } from '@frontend/jsx-core';
import { CourseLevelAccordion } from 'apps/platform/src/Course/CourseLevels/components/CourseLevelAccordion';
import { GetCourseDocument } from 'apps/platform/src/Course/graphql/operations.content.generated';
import { transformToCourseLevel } from 'apps/platform/src/Course/transformers/transformToCourseLevels';
import { ErrorBox } from 'apps/platform/src/shared/Error/ErrorBox';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { TranslatedString } from 'apps/platform/src/I18N/components/TranslatedString';
import { CourseOverviewPanel } from 'apps/platform/src/Course/CourseOverviewPanel/CourseOverviewPanel';
import { CourseLearningsPanel } from 'apps/platform/src/Course/CourseLearningsPanel/CourseLearningsPanel';
import { CourseDetailPanel } from 'apps/platform/src/Course/CourseDetailPanel/CourseDetailPanel';

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

      <section className="container max-w-5xl mt-10">
        <Typography component="h1" variant="h3">
          {course.Name}
        </Typography>
      </section>

      <section className="container max-w-5xl flex xl:gap-10 flex-col-reverse xl:flex-row mt-4">
        <div className="w-full xl:w-2/3">
          <CourseOverviewPanel description={course.Description} />
          <CourseLearningsPanel learnings={course.Learnings} />
        </div>

        <CourseDetailPanel usps={course.USPs} quickLinks={course.QuickLinks} instructors={course.Instructors?.data} />
      </section>

      {levels && <CourseLevelAccordion levels={levels} />}
    </>
  );
};

export default Page;
