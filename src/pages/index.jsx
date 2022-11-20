import Head from "next/head";
import { Header } from "src/components/Header";

const Index = (props) => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPlaceholderのAPIを色々叩いてみるよ！</p>
    </div>
  );
};

export default Index;
