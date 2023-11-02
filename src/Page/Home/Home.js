import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Suggest from "../../Components/Suggest/Suggest";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <Suggest />
      <Footer />
    </div>
  );
}

export default Home;
