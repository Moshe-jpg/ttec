import React from "react";
import nightSeder2 from "../../assets/night-seder-2.jpg";

const About = () => {
  //  Goals, Rebbeim bios, History, Media mentions

  const AboutArray = [
    {
      direction: "row",
      headerText: "De Finibus Bonorum et Malorum",
      text: "De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum",
      imgSrc: nightSeder2,
      altTag: "De Finibus Bonorum et Malorum",
    },
    {
      direction: "row-reverse",
      headerText: "De Finibus Bonorum et Malorum",
      text: "De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum",
      imgSrc: nightSeder2,
      altTag: "De Finibus Bonorum et Malorum",
    },
    {
      direction: "row",
      headerText: "De Finibus Bonorum et Malorum",
      text: "De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum",
      imgSrc: nightSeder2,
      altTag: "De Finibus Bonorum et Malorum",
    },

    {
      direction: "row-reverse",
      headerText: "De Finibus Bonorum et Malorum",
      text: "De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum",
      imgSrc: nightSeder2,
      altTag: "De Finibus Bonorum et Malorum",
    },
    {
      direction: "row",
      headerText: "De Finibus Bonorum et Malorum",
      text: "De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum",
      imgSrc: nightSeder2,
      altTag: "De Finibus Bonorum et Malorum",
    },
    {
      direction: "row-reverse",
      headerText: "De Finibus Bonorum et Malorum",
      text: "De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum",
      imgSrc: nightSeder2,
      altTag: "De Finibus Bonorum et Malorum",
    },
  ];

  return (
    <section id="about">
      <header>
        <h1 className="about-header">
          About <span>בית מדרש מעין התורה</span>
        </h1>
      </header>
      <div className="about-outer-container">
        <h2 className="about-container-header">
          We Offer The Opportunity For Growth & Structure To Bochurim Who Return
          From Israel Seeking To Maintain Their Momentum While Excelling In
          Higher Education
        </h2>
        <div className="separation-line"></div>
        <ul className="about-container">
          {AboutArray.map((AboutItem, i) => {
            return (
              <li key={i} className={`about-item ${AboutItem.direction}`}>
                <div className="text-container">
                  <h3>{AboutItem.headerText}</h3>
                  <p>{AboutItem.text}</p>
                </div>
                <div className="img-container">
                  <img src={AboutItem.imgSrc} alt={AboutItem.altTag}></img>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default About;
