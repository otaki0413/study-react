import Head from "next/head";
import Link from "next/link";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { useEffect, useState } from "react";

// コンポーネントの外にメソッドを書く場合
// const handleClick = (e) => {
//   console.log(e.target.value);
//   e.preventDefault();
//   alert(foo);
// };

export default function Home() {
  const [count, setCount] = useState(10)

  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

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
