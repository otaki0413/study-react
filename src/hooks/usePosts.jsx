import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

// カスタムフックでfetch関数
export const usePost = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0, // データの存在を保証した上で、lengthをチェック
  };
};
