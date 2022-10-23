import React from "react";
import HomeIntro from "../components/HomeIntro";
import Navbar from "../components/Navbar";
import AiChallenges from "../components/AiChallenges";
import SearchPage from "../components/SearchPage";
import ReactCards from "../components/ReactCards";
import Intro from "../components/Intro";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <HomeIntro />
      <AiChallenges />
      <SearchPage />
      <ReactCards />
    </div>
  );
};

export default Homepage;
