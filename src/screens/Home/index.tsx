import Head from "@components/Head";
import Categories from "@components/Home/Categories";
import Featured from "@components/Home/Featured";
import Header from "@components/Layout/Header";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head title={"Page d'acceuil"} />
      <Header />
      <Featured />
      <Categories />
    </>
  );
};

export default Home;
