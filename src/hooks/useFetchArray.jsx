import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

// 共通のカスタムフックの形式
const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

// commentsのAPIを叩く用のカスタムフック
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

// postsのAPIを叩く用のカスタムフック
export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

// usersのAPIを叩く用のカスタムフック
export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};
