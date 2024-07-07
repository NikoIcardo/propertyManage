import React from "react";
import Navbar from "../navbar/Navbar";
import MainContentArea from "../mainContentArea/mainContentArea";

const Home = () => {
  return (
    <div className="flex bg-gradient-to-b">
      <Navbar />
      <MainContentArea />
    </div>
  );
};

export default Home;
