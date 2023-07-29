import { GetTranslationsQuery } from '../components/graphql/operations.content.generated';

export const transformTranslations = (translationsData: GetTranslationsQuery['translations']) => {
  const transformedTranslations: { [key: string]: string } = {};

  translationsData?.data.forEach((translation) => {
    const { attributes } = translation;
    if (attributes) {
      transformedTranslations[attributes.Identifier] = attributes.Translation;
    }
  });

  return transformedTranslations;
};
