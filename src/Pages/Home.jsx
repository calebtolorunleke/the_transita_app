import React from "react";
import Header from "../components/Header";
import Phoneheader from "../components/Phoneheader";
import Features from "../components/Features";
import WhyTransita from "../components/WhyTransita";
import Questions from "../components/Questions";
import Aboutus from "../components/Aboutus";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <Phoneheader />
        <Features />
        <WhyTransita />
        <Questions />
        <Aboutus />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
};

export default Home;
