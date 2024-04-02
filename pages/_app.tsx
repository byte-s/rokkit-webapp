import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local'
import React from 'react';
import Head from 'next/head';

export const SuisseIntl = localFont({
  src: [
    {
      path: '../static/fonts/SuisseIntl-Black.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../static/fonts/SuisseIntl-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../static/fonts/SuisseIntl-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../static/fonts/SuisseIntl-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../static/fonts/SuisseIntl-SemiBold.otf',
      weight: '600',
      style: 'normal',
    }
  ],
})

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <main className={SuisseIntl.className}>
      <Head>
        <link rel="apple-touch-icon" sizes='180x180' href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
        <Component {...pageProps} />
      </main>;
}