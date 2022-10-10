import Categories from "@components/Home/Categories";
import Featured from "@components/Home/Featured";
import Header from "@components/Layout/Header";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <Header title={"Page d'acceuil"} description={"pas de description"} />
      <Featured />
      <Categories />
    </>
  );
};

export default Home;
