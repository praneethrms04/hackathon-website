import React from "react";
import HomeIntro from "../components/HomeIntro";
import Navbar from "../components/Navbar";
import AiChallenges from "../components/AiChallenges";
import SearchPage from "../components/SearchPage";
import ReactCards from "../components/ReactCards";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HomeIntro />
      <AiChallenges />
      <SearchPage />
      <ReactCards />
    </div>
  );
};

export default Homepage;
