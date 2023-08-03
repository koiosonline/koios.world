import { GetCourseQuery } from '../components/graphql/operations.content.generated';

export const transformToCourseLevel = (
  levels: NonNullable<NonNullable<NonNullable<GetCourseQuery['courses']>['data'][0]['attributes']>['levels']>['data']
) => {
  return levels.map((level) => ({
    name: level.attributes?.Name || '',
    slug: level.attributes?.slug || '',
    chapters: level.attributes?.chapters?.data.map((chapter) => ({
      name: chapter.attributes?.Name || '',
      slug: chapter.attributes?.slug || '',
    })) || []
  }));
};
