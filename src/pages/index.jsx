import Head from "next/head";
import Link from "next/link";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { useCallback, useEffect } from "react";

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

  useEffect(() => {
    console.log("マウントしました");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウントしました");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Link
        href='/about'
        legacyBehavior
      >
        <a onClick={handleClick}>ボタン</a>
      </Link>
      <Main page='index' />
      <Footer />
    </div>
  );
}
