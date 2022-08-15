import React from "react";
import Galery from "../components/Galery";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
  <div className="flex flex-col bg-blue-200">
    <Navbar/>
    <Galery/>
  </div>
  );
};

export default Home;
