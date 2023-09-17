import React from "react";
import ContentList from "../../Components/ContentList/ContenList";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <ContentList />
      <Footer />
    </div>
  );
}

export default Home;
