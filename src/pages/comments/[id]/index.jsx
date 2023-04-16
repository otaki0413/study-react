import { CommentComponent } from "src/components/Comment";
import { Header } from "src/components/Header";
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

// コメント情報をSG化
export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  // コメントが取得できなかったら、404ページ表示
  if (!comment.ok) {
    return {
      notFound: true,
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
  };
};

const CommentsId = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Header />
      <SWRConfig value={{ fallback }}>
        <CommentComponent />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
