import Head from "next/head";
import { usePost } from "src/hooks/usePost";

export const PostComponent = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <p>Created by {user.name}</p> : null}
    </div>
  );
};
