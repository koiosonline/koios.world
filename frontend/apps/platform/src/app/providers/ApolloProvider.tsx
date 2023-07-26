import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

type ApolloProviderProps = {
  children: React.ReactNode;
};

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_URL,
    headers: {
      Authorization: process.env.NEXT_PUBLIC_GRAPHQL_CONTENT_SCHEME_AUTH_HEADER || ''
    }
  }),
  cache: new InMemoryCache()
});

export const ApolloProvider = ({ children }: ApolloProviderProps) => {
  return <Provider client={client}>{children}</Provider>;
};
