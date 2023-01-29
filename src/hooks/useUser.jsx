import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

/* users一覧から対象のuserデータを取得する処理 */
export const useUser = () => {
  const router = useRouter();
  // SWRのイミュータブルを実装
  const { data, error } = useSWRImmutable(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
