import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "../../FullPageComponent.css";
import CmImg from "../../assets/chanuka-mesiba.jpg";
import chavImg from "../../assets/chavrusa.jpg";
import farbImg from "../../assets/farbreng.jpg";
import guysImg from "../../assets/guys-pic.jpg";
import lainImg from "../../assets/laining.jpg";
import morn1Img from "../../assets/morning-1.jpg";
import morn2Img from "../../assets/morning-2.jpg";
import ns2Img from "../../assets/night-seder-2.jpg";
import ns3Img from "../../assets/night-seder-3.jpg";
import nsNorthImg from "../../assets/night-seder-north.jpg";
import nsNorth2Img from "../../assets/night-seder-north-2.jpg";

const images = [
  CmImg,
  chavImg,
  farbImg,
  guysImg,
  lainImg,
  morn1Img,
  morn2Img,
  ns2Img,
  ns3Img,
  nsNorthImg,
  nsNorth2Img,
];

const navGallery = () => window.innerWidth >= 999;

const Gallery = () => (
  <ReactFullpage
    licenseKey={"gplv3-license"}
    navigation
    responsive={400}
    controlArrows={navGallery()}
    slidesNavigation={true}
    slidesNavPosition={"bottom"}
    keyboardScrolling={true}
    scrollOverflow={true}
    autoScrolling={true}
    scrollingSpeed={500}
    dragAndMove={true}
    afterRender={() => {
      setInterval(() => {
        window.fullpage_api.moveSlideRight();
      }, 5000);
    }}
    render={() => (
      <ReactFullpage.Wrapper>
        <div className="section">
          {images.map((imgSrc, index) => (
            <div className="slide" key={index}>
              <img src={imgSrc} alt="Gallery item" />
            </div>
          ))}
        </div>
      </ReactFullpage.Wrapper>
    )}
  />
);

export default Gallery;
