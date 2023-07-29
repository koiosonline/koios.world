import { NextRequest, NextResponse } from 'next/server';
import { SupportedLanguages, defaultLocale } from './I18N/availableLanguages';

type LocaleParts = {
  lang: string;
  country: string;
};

const locales = Object.values(SupportedLanguages);

const getLocalePartsFrom = ({ pathname, locale }: { pathname?: string; locale?: string }): LocaleParts => {
  const parts = locale ? locale.toLowerCase().split('-') : pathname!.split('/')[1].split('-');
  return {
    lang: parts[0],
    country: parts[1]
  };
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname; 

  const defaultLocaleParts = getLocalePartsFrom({ locale: defaultLocale });
  const currentPathnameParts = getLocalePartsFrom({ pathname });

  const isMissingValidLocale = locales.every((locale) => {
    const localeParts = getLocalePartsFrom({ locale });
    return !pathname.startsWith(`/${localeParts.lang}-${localeParts.country}`);
  });

  // Rewrite it so next.js will render `/` as if it was `/en-US`
  if (isMissingValidLocale) {
    return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  // Check if the default locale is in the pathname
  if (currentPathnameParts.lang === defaultLocaleParts.lang && currentPathnameParts.country === defaultLocaleParts.country) {
    // Remove the default locale from pathname
    // use a rewrite so that Next will still match the correct code file as if there was a locale in the pathname
    return NextResponse.redirect(new URL(pathname.replace(`/${defaultLocaleParts.lang}-${defaultLocaleParts.country}`, ''), request.url));
  }
}

// do not localize next.js paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};
