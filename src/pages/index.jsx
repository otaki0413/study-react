import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { useCallback } from "react";
import Link from "next/link";

// コンポーネントの外にメソッドを書く場合
// const handleClick = (e) => {
//   console.log(e.target.value);
//   e.preventDefault();
//   alert(foo);
// };

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.value);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Link
        href='/about'
        onClick={handleClick}
        legacyBehavior
      >
        <a>ボタン</a>
      </Link>
      <Main page='index' />
      <Footer />
    </div>
  );
}
