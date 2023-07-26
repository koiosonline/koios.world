'use client';

import { useQuery } from '@apollo/client';
import { GetCoursesDocument } from './graphql/operations.content.generated';

export const CoursesGrid = () => {
  const { loading, error, data } = useQuery(GetCoursesDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data && (
        data.courses?.data.map((course) => (
          <li key={course.attributes?.Name}>{course.attributes?.Name}</li>
        ))
      )}
    </ul>
  );
};
