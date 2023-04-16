import useSWRImmutable from "swr/immutable";

// 共通のカスタムフック
export const useFetchArray = (url) => {
  // 一度リクエストを実行後、リクエストは行わない
  const { data, error } = useSWRImmutable(url);

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
