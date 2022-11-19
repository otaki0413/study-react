import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

const About = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      {props.isShow ? <h2>{props.doubleCount}</h2> : null}
      <hr />
      <input
        type='text'
        value={props.text}
        onChange={props.handleChange}
      />
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={props.handleAdd}>追加</button>
      <Main page='about' />
      <Footer />
    </div>
  );
};

export default About;
