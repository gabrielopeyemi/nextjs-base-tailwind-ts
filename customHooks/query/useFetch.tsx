/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useQuery } from 'react-query';

export const useFetchSingleCourse = () => {
  return useQuery({
    queryKey: ['QUERY_KEY'],
    queryFn: 'QUERY_FUNCTION',
    enabled: true,
    initialData: [],
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onSuccess: (data) => {
      alert('success');
    },
    onError: (error) => {
      alert('error');
    },
  });
};
