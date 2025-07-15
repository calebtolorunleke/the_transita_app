import React from "react";
import Header from "../components/Header";
import Phoneheader from "../components/Phoneheader";
import Features from "../components/Features";
import WhyTransita from "../components/WhyTransita";

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <Phoneheader />
        <Features />
        <WhyTransita />
      </main>
    </>
  );
};

export default Home;
