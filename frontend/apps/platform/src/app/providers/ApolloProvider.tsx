import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

type ApolloProviderProps = {
  children: React.ReactNode;
};

const client = new ApolloClient({
  uri: process.env.GRAPHQL_CONTENT_SCHEME_URL_PRODUCTION,
  cache: new InMemoryCache()
});

export const ApolloProvider = ({ children }: ApolloProviderProps) => {
  return <Provider client={client}>{children}</Provider>;
};
