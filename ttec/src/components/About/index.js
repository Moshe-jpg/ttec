import React from "react";
import morningSeder from "../../assets/speech.jpg";
import guysPic from "../../assets/guys-pic.jpg";
import nightSeder2 from "../../assets/seder-pic-2.jpg";
import rabbiOchs from "../../assets/rabbi-ochs.jpg";
import skiingPic from "../../assets/skiing.jpg"

const About = () => {
  //  Goals, Rebbeim bios, History, Media mentions

  const AboutArray = [
    {
      direction: "row",
      headerText: "Morning Seder",
      text: "Located in Viewmount Shul, we begin with 8:30 Shachris, followed by breakfast & a 30 minute shiur on Shaarei Teshuva. Afterwards, we split up into Chavrusas & learn Gemara until Shiur is given by Rabbi Rudner from 12pm until 12:30pm.",
      imgSrc: morningSeder,
      altTag: "De Finibus Bonorum et Malorum",
    },
    {
      direction: "row-reverse",
      headerText: "Accredited Studies",
      text: "Participants earn up to 60 credits from TRI for their Beis Medrash learning & Bichinos. In the afternoon Mr. Yaakov Smith oversees university studies while the students work on their online courses from SUNY (Empire State University). Some degree options include Accounting, Business, Law, Medicine, & Liberal Arts. ",
      imgSrc: guysPic,
      altTag: "De Finibus Bonorum et Malorum",
    },
    {
      direction: "row",
      headerText: "Night Seder",
      text: "TTEC offers flexibility for Bochurim from all parts of the city. There are 3 night seder locations, they're located in Viewmount Shul, Agudah North (Bathurst & Wilson), & in Thornhill at Kollel Ohr Yosef. Night Seder usually consists of Gemara & Parsha, & is run by some of the city's finest Rebbeim.",
      imgSrc: nightSeder2,
      altTag: "De Finibus Bonorum et Malorum",
    },

    {
      direction: "row-reverse",
      headerText: "Guest Speakers",
      text: "בית מדרש מעין התורה is host to some of the best speakers & Rabbanim. We've had the pleasure of being addressed by Rav Shlomo Miller, Rav Mordechai Ochs, Rav Moshe Mordechai Lowe, Rav Dovid Pam, Rabbi Dr. Akiva Tatz, Rav Eliezer Breitowitz, & Rav Yoir Adler, to name a few.",
      imgSrc: rabbiOchs,
      altTag: "De Finibus Bonorum et Malorum",
    },
    {
      direction: "row",
      headerText: "Shabbatons & Trips",
      text: "At different points during the year, בית מדרש מעין התורה arranges elevating trips, Mesibas, & Shabbatons. This includes Shabbos at the cottage, skiing trips, Chanukah & Purim Mesibas, & much more. Such events provide the bochurim with opportunities to bond with each other & with the rabbeim.",
      imgSrc: skiingPic,
      altTag: "De Finibus Bonorum et Malorum",
    },
    // {
    //   direction: "row-reverse",
    //   headerText: "De Finibus Bonorum et Malorum",
    //   text: "De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum",
    //   imgSrc: nightSeder2,
    //   altTag: "De Finibus Bonorum et Malorum",
    // },
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
