import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local'

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
            <Component {...pageProps} />
          </main>;
}
