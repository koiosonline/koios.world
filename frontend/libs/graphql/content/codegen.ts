import { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

dotenv.config();

(() => {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_URL_LOCAL) {
    throw new Error('NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_URL_LOCAL is not defined');
  }

  if (!process.env.NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_AUTH_HEADER) {
    throw new Error('NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_AUTH_HEADER is not defined');
  }
})();

const config: CodegenConfig = {
  schema: [
    {
      // Local address instead of localhost to avoid schema loading issues
      [process.env.NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_URL_LOCAL]: {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_AUTH_HEADER || ''
        }
      }
    }
  ],
  documents: ['./**/*.content.graphql'],
  generates: {
    './libs/graphql/content/src/types/graphql-types.ts': {
      config: {
        useIndexSignature: true,
        maybeValue: 'T | undefined | null',
        mappers: {}
      },
      plugins: ['typescript', 'typescript-resolvers']
    },
    './': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '~@frontend/graphql/content'
      },
      config: {
        skipTypename: true,
        maybeValue: 'T | undefined | null'
      },
      plugins: ['typescript-operations', 'typed-document-node']
    }
  }
};

export default config;
