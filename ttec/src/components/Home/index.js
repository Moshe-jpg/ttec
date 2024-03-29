
import React from "react";
import morningImg from "../../assets/morning-1.webp";
import morning2Img from "../../assets/morning-2.webp";
import rrImg from "../../assets/rabbi-rudner.webp";
import speechImg from "../../assets/speech.webp";
import logo from "../../assets/ttec-logo-no-bg.webp";
import Reviews from "../Reviews";
import ScrollToTop from "../../helpers/ScrollToTop";

// list items generated by ChatGPT

// const ChatGptList = () => {
//   return (
//     <>
//       <li className="offer">
//         <div className="offers-num-container">
//           <span className="offers-num">1</span>
//         </div>
//         <h3>Academic Excellence</h3>
//         <div className="info-container">
//           <p>
//             Our warm, vibrant community in Toronto is the perfect place for a
//             talmid intent on retaining his Yeshiva connection while pursuing a
//             degree and vocation.
//           </p>
//           <div className="separation-line"></div>
//           <span>Join us for a holistic educational journey.</span>
//         </div>
//       </li>
//       <li className="offer">
//         <div className="offers-num-container">
//           <span className="offers-num">2</span>
//         </div>
//         <h3>Dynamic Learning Schedule</h3>
//         <div className="info-container">
//           <p>
//             Our day starts with Shachris at Toras Emes Viewmount followed by a
//             nutritious breakfast. This leads into our first Seder filled with
//             shiurim and chavrusa learning.
//           </p>
//           <div className="separation-line"></div>
//           <span>Dive into deep learning with us.</span>
//         </div>
//       </li>
//       <li className="offer">
//         <div className="offers-num-container">
//           <span className="offers-num">3</span>
//         </div>
//         <h3>Supportive Afternoon Programs</h3>
//         <div className="info-container">
//           <p>
//             Our talmidim can earn up to 60 credits towards a bachelor’s degree
//             while being guided by our academic administrator, Mr. Yaakov Smith.
//           </p>
//           <div className="separation-line"></div>
//           <span>Pursue your education in a supportive environment.</span>
//         </div>
//       </li>
//       <li className="offer">
//         <div className="offers-num-container">
//           <span className="offers-num">4</span>
//         </div>
//         <h3>Inspiring Night Seder</h3>
//         <div className="info-container">
//           <p>
//             Rabbi Yakov Erlanger brings excitement to our night seder program.
//             We offer Gemara shiur each night at Toras Emes Viewmount and
//             Thornhill Seder location in Kollel Ohr Yosef.
//           </p>
//           <div className="separation-line"></div>
//           <span>Ignite your evenings with enriching studies.</span>
//         </div>
//       </li>
//       <li className="offer">
//         <div className="offers-num-container">
//           <span className="offers-num">5</span>
//         </div>
//         <h3>Enriching Extracurricular Activities</h3>
//         <div className="info-container">
//           <p>
//             From prominent guest speakers to elevating trips, mesibas, and
//             Shabbatons, we offer various activities that allow our bochurim to
//             bond with each other and with the rabbeim.
//           </p>
//           <div className="separation-line"></div>
//           <span>Experience our warm and inclusive family atmosphere.</span>
//         </div>
//       </li>
//     </>
//   );
// };

// List items generated by Moshe

const MosheList = () => {
  return (
    <>
      <li className="offer">
        <div className="offers-num-container">
          <span className="offers-num">1</span>
        </div>
        <h3>Structured Learning</h3>
        <div className="info-container">
          <p>
            Gemara Shiurim | 1 on 1 Learning | Shaarei Teshuva | Parsha |
            Morning & Night Seder | Daily Shachris
          </p>
          <div className="separation-line"></div>
          <span>
            These are just a few of the sugyas we cover on a weekly basis
          </span>
        </div>
      </li>
      <li className="offer">
        <div className="offers-num-container">
          <span className="offers-num">2</span>
        </div>
        <h3>University Degree</h3>
        <div className="info-container">
          <p>
            Earn a Degree through Suny | Up to 60 Credits from TRI | Options
            include Accounting, Business, Law, Medicine, Liberal Arts, etc...
          </p>
          <div className="separation-line"></div>
          <span>
            We offer the ability to excel in your education without sacrificing
            on learning
          </span>
        </div>
      </li>
      <li className="offer">
        <div className="offers-num-container">
          <span className="offers-num">3</span>
        </div>
        <h3>Trips & Shabbatons</h3>
        <div className="info-container">
          <p>Elevating Trips | Mesibas | Shabbatons | Social Events</p>
          <div className="separation-line"></div>
          <span>
            We pride ourselves on having a great Chevra, so we try to get
            together whenever possible
          </span>
        </div>
      </li>
    </>
  );
};

const Home = (props) => {
  const { pages = [], setCurrentPage } = props;

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
        <h1>בית מדרש מעין התורה</h1>
        <h2>Toronto's Post Israel Beis Medrash</h2>
        <h3>
          With TTEC's structured approach, you can earn your degree without
          sacrificing on Limud Torah
        </h3>
      </header>
      <div className="offers-area">
        <header className="offers-header-container">
          <h1 className="offers-header">Some Of What We Offer</h1>
        </header>
        <ul className="offers-container">
          <MosheList />
        </ul>
      </div>
      <div className="btn-container">
        <button
          onClick={() => {
            ScrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[1]);
            }, 1000);
          }}
        >
          Learn More About TTEC
        </button>
      </div>
      <Reviews />
      <div className="cta">
        <header>
          <h1 className="cta-header">
            Earn A Degree While Staying True To Your Learning
          </h1>
        </header>
        <div className="btn-container">
          <button
            onClick={() => {
              ScrollToTop();
              setTimeout(() => {
                setCurrentPage(pages[1]);
              }, 1000);
            }}
          >
            Learn More About TTEC
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;