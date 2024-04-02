import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local'
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from './pages.module.css'

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
  const router = useRouter();
  const [loading, setLoading] = React.useState(false)
 
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true)
    }
 
    const handleRouteChangeComplete = () => {
      setLoading(false)
    }
 
    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
 
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

  return <main>
      <Head>
        <link rel="apple-touch-icon" sizes='180x180' href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      {!loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <div className={styles.loader}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" ><g><circle cx="50" cy="23" r="13" fill="#000000">
            <animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23"/>
            </circle><g/></g></svg>
        </div>
      )}
      </main>;
}