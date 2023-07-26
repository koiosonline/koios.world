'use client';

import { gql, useQuery } from '@apollo/client';

const GET_COURSES = gql`
  query GetCourses {
    courses {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;

export const CoursesGrid = () => {
  const { loading, error, data } = useQuery(GET_COURSES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.courses.data.map((course: any) => (
        <li key={course.attributes.Name}>{course.attributes.Name}</li>
      ))}
    </ul>
  );
};
