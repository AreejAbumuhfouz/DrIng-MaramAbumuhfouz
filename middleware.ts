import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './lib/content';

// Every URL is prefixed with a locale. German is the default.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const has = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (has) return NextResponse.next();
  const cookie = req.cookies.get('NEXT_LOCALE')?.value;
  const locale = cookie && (locales as readonly string[]).includes(cookie) ? cookie : defaultLocale;
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|icon|apple-icon|opengraph-image|robots.txt|sitemap.xml|manifest.webmanifest|llms.txt|.*\\..*).*)'],
};
