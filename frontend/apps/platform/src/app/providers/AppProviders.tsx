'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { AppLayout } from '../../Layout/AppLayout';
import { store } from '../../store/store';
import { ThemeProvider } from './ThemeProvider';
import { ApolloProvider } from './ApolloProvider';

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppLayoutProps) {
  return (
    <ReduxProvider store={store}>
      <ApolloProvider>
        <ThemeProvider>
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
}
