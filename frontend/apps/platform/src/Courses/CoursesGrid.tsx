'use client';

import { useQuery } from '@apollo/client';
import { GetCoursesDocument } from './graphql/operations.content.generated';
import { CourseCard } from './CourseCard';
import { usePathname, useRouter } from 'next/navigation'

export const CoursesGrid = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { loading, error, data } = useQuery(GetCoursesDocument);

  const handleListItemClick = (e: React.MouseEvent, path: string) => {
    e?.preventDefault()
    router.push(`${pathname}/${path.toLocaleLowerCase()}`)
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className='w-full grid grid-cols-fit-64 gap-4 h-fit'>
      {data &&
        data.courses?.data.map((course) => (
          <li key={course.attributes?.Name} onClick={(e) => handleListItemClick(e, `/${course.attributes?.Slug}`)}>
            <CourseCard name={course.attributes?.Name || ''} thumbnail={course.attributes?.Thumbnail?.data?.attributes?.formats.thumbnail.url || ''} />
          </li>
        ))}
    </ul>
  );
};
