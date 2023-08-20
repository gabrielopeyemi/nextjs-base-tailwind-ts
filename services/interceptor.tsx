/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
import NProgress from 'nprogress';
import { ReactElement } from 'react';
import instance from './instance';

interface interceptor {
  component: ReactElement;
//   handleCheckout: () => void;
}

const Interceptor = ({ component }: interceptor) => {
  const userToken = '';
  const isLoggedIn = true;

  instance.interceptors.request.use((config) => {
    NProgress.start();
    if (isLoggedIn) {
      Object.assign(config.headers, {
        Authorization: `${userToken}`,
      });
    }

    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      NProgress.done();
      return response;
    },
    (error) => {
      NProgress.done();
      if (error?.code === 'ECONNABORTED') {
        alert('Error');
        return error;
      }
      if (error?.response?.data?.message === 'User not authorized for this') {
        // clear local storage;
        window.location.href = '/home';
      }
      // eslint-disable-next-line no-underscore-dangle
      if (
        error?.response?.status === 401
        && error.config
      ) {
        if ('userToken') {
          alert('error');
          // clear local storage
          window.location.href = '/home';
        }
      }

      if (error?.response?.status === 500) {
        error.response.data.message = 'Something went wrong, Please try again!';
        alert('error');
      }
      return Promise.reject(error);
    },
  );

  return component;
};

export default Interceptor;
