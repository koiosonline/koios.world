import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import '../../assets/styles/globals.css';
import { AppProviders } from './providers/AppProviders';
import { convertToSupportedLanguage } from '../../I18N/helpers/convertToSupportedLanguage';
import { defaultLocale } from '../../I18N/availableLanguages';

export const metadata = {
  title: 'App - Koios',
  description: 'The Koios App Platform is a dynamic online space that seamlessly blends learning, earning, and connecting into a holistic experience. Designed to empower individuals, the platform serves as a hub of opportunities where knowledge acquisition, growth, and meaningful connections converge.'
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Params;
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  const lang = params.lang ? convertToSupportedLanguage(params.lang) : defaultLocale;

  return (
    <html lang={lang}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
