'use client';

import { useQuery } from '@apollo/client';
import { GetCoursesDocument } from './graphql/operations.content.generated';
import { CourseCard } from './CourseCard';
import { usePathname, useRouter } from 'next/navigation';
import { LoaderBox } from '@frontend/jsx-core';
import { ErrorBox } from '../shared/Error/ErrorBox';

export const CoursesGrid = () => {
  const router = useRouter();
  const pathname = usePathname();
  const imagePlaceholder = '/assets/images/placeholders/placeholder-image.jpg';
  const { loading, error, data } = useQuery(GetCoursesDocument);

  const handleListItemClick = (e: React.MouseEvent, path: string) => {
    e?.preventDefault();
    router.push(`${pathname}/${path.toLocaleLowerCase()}`);
  };

  if (loading) return <LoaderBox />;
  if (error) return <ErrorBox />;

  return (
    <ul className="w-full grid grid-cols-fit-64 gap-4 h-fit">
      {data &&
        data.courses?.data.map((course) => (
          <li key={course.attributes?.Name} onClick={(e) => handleListItemClick(e, `/${course.attributes?.Slug}`)}>
            <CourseCard
              name={course.attributes?.Name || ''}
              thumbnail={course.attributes?.Thumbnail?.data?.attributes?.formats.thumbnail.url || imagePlaceholder}
              alternativeText={course.attributes?.Thumbnail?.data?.attributes?.alternativeText || 'Course thumbnail'}
            />
          </li>
        ))}
    </ul>
  );
};
