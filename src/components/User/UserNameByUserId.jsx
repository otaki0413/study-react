import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const UserNameByUserId = (props) => {
  // userIdに紐づくuserデータを取得
  const { data, error, isLoading } = useFetch(
    props.id ? `${API_URL}/users/${props.id}` : null
  );

  if (isLoading) {
    return <div>ローディング中。。。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Created by {data?.name}</div>;
};
