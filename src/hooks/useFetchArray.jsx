import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

// 共通のカスタムフック
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

// postIdに紐づくcommentsのAPIを叩く用のカスタムフック
export const useCommentsByPostsId = (id) => {
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};

// userIdに紐づくpostsのAPIを叩く用のカスタムフック
export const usePostsByUserId = (id) => {
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};
