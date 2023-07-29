'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from './ThemeProvider';
import { ApolloProvider } from './ApolloProvider';
import { TranslationsProvider } from 'apps/platform/src/app/[lang]/providers/TranslationsProvider';
import { AppLayout } from 'apps/platform/src/Layout/AppLayout';
import { store } from 'apps/platform/src/store/store';
import { LocalizationProvider } from './LocalizationProvider';

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppLayoutProps) {
  return (
    <ReduxProvider store={store}>
      <ApolloProvider>
        <ThemeProvider>
          <LocalizationProvider>
            <TranslationsProvider>
              <AppLayout>{children}</AppLayout>
            </TranslationsProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
}
