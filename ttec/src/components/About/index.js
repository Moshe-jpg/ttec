import React from "react";
import morningSeder from "../../assets/speech.jpg";
import guysPic from "../../assets/guys-pic.jpg";
import nightSeder2 from "../../assets/seder-pic-2.jpg";
import rabbiOchs from "../../assets/rabbi-ochs.jpg";
import skiingPic from "../../assets/skiing.jpg";
import rabbiRudner from "../../assets/rabbi-rudner.jpg";
import rabbiOberstein from "../../assets/rabbi-oberstein-4.jpg";
import rabbiRothenberg from "../../assets/rabbi-rothenberg.jpg";
import rabbiBartfeld from "../../assets/rabbi-bartfeld.jpg";
import rabbiErlanger from "../../assets/night-seder-north.jpg";
import rabbiWarman from "../../assets/night-seder-north-2.jpg";
import rabbiTessler from "../../assets/seder-pic-2.jpg";
import yaakovSmith from "../../assets/rabbi-rudner-4.jpg";
import arrow from "../../assets/arrow.png";

const About = (props) => {
  const { pages = [], setCurrentPage } = props;

  const AboutArray = [
    {
      direction: "row",
      headerText: "Morning Seder",
      text: "Located in Viewmount Shul, we begin with 8:30 Shachris, followed by breakfast & a 30 minute shiur on Shaarei Teshuva. Afterwards, we split up into Chavrusas & learn Gemara until Shiur is given by Rabbi Rudner from 12pm until 12:30pm.",
      imgSrc: morningSeder,
      altTag: "Morning Seder",
    },
    {
      direction: "row-reverse",
      headerText: "Accredited Studies",
      text: "Participants earn up to 60 credits from TRI for their Beis Medrash learning & Bichinos. In the afternoon Mr. Yaakov Smith oversees university studies while the students work on their online courses from SUNY (Empire State University). Some degree options include Accounting, Business, Law, Medicine, & Liberal Arts. ",
      imgSrc: guysPic,
      altTag: "Accredited Studies",
    },
    {
      direction: "row",
      headerText: "Night Seder",
      text: "TTEC offers flexibility for Bochurim from all parts of the city. There are 3 night seder locations, they're located in Viewmount Shul, Agudah North (Bathurst & Wilson), & in Thornhill at Kollel Ohr Yosef. Night Seder usually consists of Gemara & Parsha, & is run by some of the city's finest Rebbeim.",
      imgSrc: nightSeder2,
      altTag: "Night Seder",
    },

    {
      direction: "row-reverse",
      headerText: "Guest Speakers",
      text: "בית מדרש מעין התורה is host to some of the best speakers & Rabbanim. We've had the pleasure of being addressed by Rav Shlomo Miller, Rav Mordechai Ochs, Rav Moshe Mordechai Lowe, Rav Dovid Pam, Rabbi Dr. Akiva Tatz, Rav Eliezer Breitowitz, & Rav Yoir Adler, to name a few.",
      imgSrc: rabbiOchs,
      altTag: "Guest Speakers",
    },
    {
      direction: "row",
      headerText: "Shabbatons & Trips",
      text: "At different points during the year, בית מדרש מעין התורה arranges elevating trips, Mesibas, & Shabbatons. This includes Shabbos at the cottage, skiing trips, Chanukah & Purim Mesibas, & much more. Such events provide the bochurim with opportunities to bond with each other & with the rabbeim.",
      imgSrc: skiingPic,
      altTag: "Shabbatons & Trips",
    },
    // {
    //   direction: "row-reverse",
    //   headerText: "De Finibus Bonorum et Malorum",
    //   text: "De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum De Finibus Bonorum et Malorum",
    //   imgSrc: nightSeder2,
    //   altTag: "De Finibus Bonorum et Malorum",
    // },
  ];

  const rabbiArray = [
    {
      name: "Rabbi Shaya Rudner",
      imgSrc: rabbiRudner,
      altTag: "Rabbi Shaya Rudner",
      description: "Maggid Shiur",
    },
    {
      name: "Rabbi Avraham Oberstein",
      imgSrc: rabbiOberstein,
      altTag: "Rabbi Avraham Oberstein",
      description: "Menahel",
    },
    {
      name: "Rabbi Meyer Rothenberg",
      imgSrc: rabbiRothenberg,
      altTag: "Rabbi Meyer Rothenberg",
      description: "Morning Seder Rebbi",
    },
    {
      name: "Rabbi Eli Bartfeld",
      imgSrc: rabbiBartfeld,
      altTag: "Rabbi Eli Bartfeld",
      description: "Morning Seder Rebbi",
    },
    {
      name: "Rabbi Yakov Erlanger",
      imgSrc: rabbiErlanger,
      altTag: "Rabbi Yakov Erlanger",
      description: "Night Seder Rebbi",
    },
    {
      name: "Rav Dovid Warman",
      imgSrc: rabbiWarman,
      altTag: "Rav Dovid Warman",
      description: "Night Seder Rebbi",
    },
    {
      name: "Rabbi Netanel Tessler",
      imgSrc: rabbiTessler,
      altTag: "Rabbi Netanel Tessler",
      description: "Night Seder Rebbi",
    },
    {
      name: "Mr. Yaakov Smith",
      imgSrc: yaakovSmith,
      altTag: "Mr. Yaakov Smith",
      description: "Academic Administrator",
    },
  ];

  return (
    <section id="about">
      <header className="about-header-container">
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
      <header className="about-rebbeim-container">
        <h1 className="rebbeim-header">Meet Our Faculty</h1>
      </header>
      <ul className="card-container">
        {rabbiArray.map((rabbiCard, i) => {
          return (
            <li key={i} className="card">
              <h4 className="name">{rabbiCard.name}</h4>
              <img src={rabbiCard.imgSrc} alt={rabbiCard.altTag}></img>
              <h5 className="desc">{rabbiCard.description}</h5>
            </li>
          );
        })}
      </ul>
      <header className="history-header-container">
        <h1 className="history-header">How We Started</h1>
      </header>
      <p className="history">
        The sun peeked through the dense foliage, casting a warm golden glow on
        the forest floor. Birds chirped merrily, their melodies filling the air
        with a symphony of nature's orchestra. A gentle breeze rustled the
        leaves, creating a soothing whisper that danced among the trees.
        <br></br>
        <br></br>
        The scent of fresh earth mingled with the fragrance of wildflowers,
        enveloping the senses in a tapestry of natural aromas. In this tranquil
        haven, time seemed to slow down, inviting one to pause, breathe, and
        appreciate the beauty of the world around them
      </p>
      <div className="btn-container">
        <button
          onClick={() => {
            setCurrentPage(pages[3]);
          }}
        >
          Sign Up For TTEC
        </button>
      </div>
      <header className="media-header-container">
        <h1 className="media-header">Check Out Our Mentions</h1>
      </header>
      <ul className="media-mentions-container">
        <li className="mention">
          <a href="/">
            <p>Mishpacha Magazine </p>
            <img src={arrow} alt="mishpacha link"></img>
          </a>
        </li>
        <li className="mention">
          <a href="/">
            <p>Mishpacha Magazine </p>
            <img src={arrow} alt="mishpacha link"></img>
          </a>
        </li>
        <li className="mention">
          <a href="/">
            <p>Mishpacha Magazine </p>
            <img src={arrow} alt="mishpacha link"></img>
          </a>
        </li>
        <li className="mention">
          <a href="/">
            <p>Mishpacha Magazine </p>
            <img src={arrow} alt="mishpacha link"></img>
          </a>
        </li>
        <li className="mention">
          <a href="/">
            <p>Mishpacha Magazine </p>
            <img src={arrow} alt="mishpacha link"></img>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default About;
