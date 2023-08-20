/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import NProgress from 'nprogress';
import Interceptor from '../services/interceptor';

const MyApp = ({ Component, pageProps }: AppProps) => {
  NProgress.configure({
    easing: 'ease',
    speed: 500,
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <Interceptor
      component={(
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      )}
    />
  );
};

export default MyApp;
