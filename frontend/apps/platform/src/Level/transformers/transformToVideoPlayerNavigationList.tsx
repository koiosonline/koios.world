import { GetSubchapterQuery } from '../components/graphql/operations.content.generated';

export const transformToVideoPlayerNavigationList = (
  chapters: NonNullable<NonNullable<NonNullable<GetSubchapterQuery['subchapters']>['data'][0]['attributes']>['chapter']>['data']
) => {
  return chapters?.attributes?.level?.data?.attributes?.chapters?.data.map((subchapter) => ({
    chapter: subchapter.attributes?.Name || '',
    subchapters:
      subchapter.attributes?.subchapters?.data.map((subchapter) => ({
        name: subchapter.attributes?.Name || '',
        slug: subchapter.attributes?.Slug || ''
      })) || []
  }));
};
