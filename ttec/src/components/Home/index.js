import React from "react";
import morningImg from "../../assets/morning-1.jpg";
import morning2Img from "../../assets/morning-2.jpg";
import rrImg from "../../assets/rabbi-rudner.jpg";
import speechImg from "../../assets/speech.jpg";
import logo from "../../assets/ttec-logo.png";

const Home = () => {
  return (
    <section id="home">
      <div className="bg-container">
        <img id="morning1" src={morningImg} alt="Morning seder 1"></img>
        <img id="morning2" src={morning2Img} alt="Morning seder 2"></img>
        <img id="rr" src={rrImg} alt="Rabbi Rudner"></img>
        <img id="speech" src={speechImg} alt="Speech"></img>
        <img id="logo" src={logo} alt="TTEC"></img>
      </div>
      <header className="home-container">
        <h1>
          <span>TTEC</span> is Toronto's Post Israel Beis Medrash
        </h1>
        <h2>
          With TTEC's structured approach, you can earn your degree without
          sacrificing on Limud Torah
        </h2>
      </header>
    </section>
  );
};

export default Home;
