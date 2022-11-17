import useSWR from "swr";

// fetcher関数の作成
const fetcher = async (url) => {
  const response = await fetch(url);
  console.log(response);
  // fetch失敗時にエラーを投げる
  if (!response.ok) {
    throw new Error("エラーが発生したため、データ取得に失敗しました。");
  }
  const json = await response.json();
  return json;
};

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
