import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Posts as PostComponent } from "src/components/Posts";

const Posts = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostComponent />
    </div>
  );
};

export default Home;
