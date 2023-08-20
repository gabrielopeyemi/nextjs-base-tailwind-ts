/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useMutation } from 'react-query';

export const useStudentLogin = () => useMutation({
  mutationFn: 'MUTATION_FUNCTION',
  onSuccess: (res) => {
    alert('success');
  },
  onError: (error) => {
    alert('error');
  },
});
