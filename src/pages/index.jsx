import Head from "next/head";
import Link from "next/link";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { useCallback, useEffect, useState } from "react";


export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(
    (e) => {
      console.log(count);
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page='index' />
      <Footer />
    </div>
  );
}
