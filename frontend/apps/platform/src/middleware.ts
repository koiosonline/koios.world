import { NextRequest, NextResponse } from 'next/server';
import { SupportedLanguages, defaultLocale } from './I18N/availableLanguages';

const supportedLocales = Object.values(SupportedLanguages).map((locale) => locale.toLowerCase()); // Lowercased supported locales
const defaultLocaleLowercase = defaultLocale.toLowerCase();

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname; // e.g. /en-us/courses
  // const pathnameHasDefaultLocale = pathname.startsWith(`/${defaultLocaleLowercase}/`) || pathname === `/${defaultLocaleLowercase}`;
  // const pathnameHasNoLocale = pathname === '/' || pathname === '';

  const pathnameIsMissingSupportedLocale = supportedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect to default locale if no locale is present or if the locale is not supported
  if (pathnameIsMissingSupportedLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocaleLowercase}/${pathname}`, request.url)
    )
  }
}


// do not localize next.js paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};