import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>No comments found...</p>;
  }

  return (
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              {`${comment.name}（${comment.email}`}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
