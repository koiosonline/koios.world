import * as Types from '@frontend/graphql/content';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetCoursesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCoursesQuery = { courses?: { data: Array<{ attributes?: { Name: string } | undefined | null }> } | undefined | null };


export const GetCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCoursesQuery, GetCoursesQueryVariables>;