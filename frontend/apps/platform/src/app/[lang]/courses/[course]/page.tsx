'use client';

import { useQuery } from '@apollo/client';
import { Typography } from '@frontend/jsx-core';
import { CourseLevelAccordion } from 'apps/platform/src/Course/components/CourseLevelAccordion';
import { GetCourseDocument } from 'apps/platform/src/Course/components/graphql/operations.content.generated';
import { transformToCourseLevel } from 'apps/platform/src/Course/transformers/transformToCourseLevels';
import { useParams } from 'next/navigation';

const Page = () => {
  const params = useParams();
  const currentCourse = params.course;
  const { loading, error, data } = useQuery(GetCourseDocument, {
    variables: {
      filters: {
        Slug: {
          eq:  currentCourse
        }
      }
    }
  });
  const course = data?.courses?.data[0].attributes;
  const levels = transformToCourseLevel(course?.levels?.data || []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!course) return <p>Course not found</p>;


  return (
    <>
      <Typography component="h1">{course.Name}</Typography>
      <Typography>{course.Description}</Typography>

      {levels && <CourseLevelAccordion levels={levels} />}
    </>
  );
};

export default Page;
