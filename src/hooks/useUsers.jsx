import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useUsers = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error, // データがない、かつエラーもない
    isEmpty: data && data.length === 0, // データの存在を保証した上で、lengthをチェック
  };
};
