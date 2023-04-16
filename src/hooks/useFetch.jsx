import useSWR from "swr";

export const useFetch = (url) => {
  const { data, error, isLoading } = useSWR(url);

  return {
    data,
    error,
    isLoading,
  };
};
