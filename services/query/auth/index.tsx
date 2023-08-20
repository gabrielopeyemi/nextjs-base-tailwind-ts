/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

import instance from '../../instance';

interface ILoginDetails {
  email: string;
  password: string;
}

export const StudentLoginEP = (payload: ILoginDetails) => instance.post('API', payload);
