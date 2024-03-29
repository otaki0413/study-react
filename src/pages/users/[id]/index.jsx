import { Header } from "src/layouts/AppLayout/Header";
import { UserDetail } from "src/components/User/UserDetail";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

// SSRを使用して、複数のAPIを叩く例
export const getServerSideProps = async (ctx) => {
  // ユーザーの情報の取得
  const { id } = ctx.query;
  const USER_API_URL = `${API_URL}/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();

  // ユーザーの投稿の取得
  const POSTS_API_URL = `${API_URL}/users/${userData.id}/posts`;
  const posts = await fetch(POSTS_API_URL);
  const postsData = await posts.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POSTS_API_URL]: postsData,
      },
    },
  };
};

const UsersId = (props) => {
  const { fallback } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <UserDetail />
    </SWRConfig>
  );
};

export default UsersId;
