import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts as PostComponent } from "src/components/Posts";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostComponent />
    </div>
  );
};

export default Posts;
