import Link from "next/link";
import { usePosts } from "src/hooks/useFetchArray";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

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
