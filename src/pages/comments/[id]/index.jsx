import { CommentDetail } from "src/components/Comment/CommentDetail";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

// path情報を取得
export const getStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

// コメント情報をSG化（基本的に1度しか処理が走らない）
export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  // コメントが取得できなかったら、404ページ表示
  if (!comment.ok) {
    return {
      notFound: true,
      revalidate: 10000,
    };
  }

  const commentsData = await comment.json();
  console.log(`comments/${id}のページをSGしました。`);

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentsData,
      },
    },
    revalidate: 1,
  };
};

const CommentsId = (props) => {
  const { fallback } = props;
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <CommentDetail />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
