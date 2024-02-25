import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...restPageProps } = pageProps;
  return (
      <Component {...restPageProps} />
  );
} 
 