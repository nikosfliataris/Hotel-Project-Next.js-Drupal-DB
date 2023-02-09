import Head from "next/head";
import HomePage from "./HomePage";
import HomeLayOut from "../LayOut/HomeLayOut/HomeLayOut";

export default function Home() {
  return (
    <div className="homepage">
      <Head>
        <title>Hotel Project</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <HomeLayOut>
        <HomePage />
      </HomeLayOut>
    </div>
  );
}
