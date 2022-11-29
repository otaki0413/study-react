import Link from "next/link";
import { usePost } from "src/hooks/usePost";

export const PostByCommentId = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  console.log(data, error, isLoading);
  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link
      className='text-lg hover:text-blue-500'
      href={`/posts/${data.id}`}
    >
      {data?.title}
    </Link>
  );
};
