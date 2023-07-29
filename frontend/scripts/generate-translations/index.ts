/**
 * Retrieves the latest translations from Strapi and generates TypeScript files for each language.
 * The TypeScript files are used to provide type safety for the translations.
 * This script is used in the production build process of the frontend.
 * And can be run manually by executing `npm run generate-translations`.
 */

import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';
import fetch from 'cross-fetch';
import { SupportedLanguageCodes } from '../../apps/platform/src/I18N/availableLanguages';
import { formatToTypeScriptStructure } from './helpers/formatToTypeScriptStructure';
import { transformTranslations } from '../../apps/platform/src/I18N/helpers/transformTranslations';

// Load environment variables from .env file
dotenv.config();

// Variables
const supportedLanguages: SupportedLanguageCodes[] = ['en', 'nl'];

// Load environment variables
if (!process.env.NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_URL_LOCAL) {
  throw new Error('NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_URL_LOCAL is not defined');
}

if (!process.env.NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_AUTH_HEADER) {
  throw new Error('NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_AUTH_HEADER is not defined');
}

const client = new ApolloClient({
  link: new HttpLink({
    // Local address instead of localhost to avoid schema loading issues
    uri: process.env.NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_URL_LOCAL,
    fetch: fetch,
    headers: {
      Authorization: process.env.NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_AUTH_HEADER
    }
  }),
  cache: new InMemoryCache()
});

const generateTranslationsForLanguage = async (language: SupportedLanguageCodes) => {
  const fileName = `${language}.generated.ts`;
  const destinationPath = path.join(__dirname, `../../apps/platform/src/I18N/data`);
  const filePath = path.join(destinationPath, fileName);
  const disclaimer = '// Generated! Source translations can be found in Strapi';
  const query = gql`
    query Query($locale: I18NLocaleCode, $pagination: PaginationArg) {
      translations(locale: $locale, pagination: $pagination) {
        data {
          attributes {
            Translation
            Identifier
          }
        }
      }
    }
  `;

  try {
    // Get latest translations from Strapi for the given language
    const response = await client.query({ query, variables: { locale: language, pagination: { pageSize: 500 } } });

    // Transform data to TypeScript structure
    const transformedTranslations = transformTranslations(response.data.translations);
    const structuredTranslations = formatToTypeScriptStructure(language, JSON.stringify(transformedTranslations, null, 4), disclaimer);

    // Generate file in destination path
    fs.writeFileSync(filePath, structuredTranslations);

    console.log('Files generated successfully at:', filePath);
  } catch (error) {
    console.error('File generation failed:', error);
  }
};

const run = async () => {
  for (const language of supportedLanguages) {
    await generateTranslationsForLanguage(language);
  }
};

run();
