import Link from "next/link";
import { usePostsByUserId } from "src/hooks/useFetchArray";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データがありませんでした。</div>;
  }

  return (
    <ul className='space-y-4'>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link
              className='block group'
              href={`/posts/${post.id}`}
            >
              <h1 className='text-xl font-bold group-hover:text-blue-400'>
                {post.title}
              </h1>
              <p className='text-lg text-gray-500 group-hover:text-blue-400'>
                {post.body}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
