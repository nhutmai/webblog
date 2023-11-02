import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MainContent from "../../Components/Maincontent/MainContent";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;
