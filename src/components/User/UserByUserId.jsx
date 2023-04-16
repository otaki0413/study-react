import { API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const UserByUserId = (props) => {
  // userIdに紐づくuserデータを取得
  const { data, error } = useSWR(
    props.id ? `${API_URL}/users/${props.id}` : null,
    fetcher
  );

  if (!data && !error) {
    return <div>ローディング中。。。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Created by {data.name}</div>;
};
