import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../sections/HeroSection/HeroSection";
import Reads from "../sections/Reads/Reads";
import Category from "../sections/Category/Category";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Category />
      <Reads />
      <Footer />
    </>
  );
};

export default Home;
