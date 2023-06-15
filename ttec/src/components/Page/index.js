import React from "react";
import Home from "../Home";
import About from "../About";
// import Info from "../Info";
// import Gallery from "../Gallery";
// import Tests from "../Tests";
// import Applications from "../Applications";
// import Tuition from "../Tuition";
// import Contact from "../Contact";
// import Donate from "../Donate";
import PageContent from "../PageContent";

const Page = ({ currentPage, setCurrentPage, pages }) => {
  const renderPage = () => {
    if (currentPage.name === "Home") {
      document.title = "Home";
      return <Home pages={pages} setCurrentPage={setCurrentPage} />;
    } else if (currentPage.name === "About") {
      document.title = "About";
      return <About pages={pages} setCurrentPage={setCurrentPage} />;
    } 
    // else if (currentPage.name === "Gallery") {
    //   document.title = "Gallery";
    //   return <Gallery />;
    // } else if (currentPage.name === "Tuition") {
    //   document.title = "Tuition";
    //   return <Info />;
    // } else if (currentPage.name === "Tests") {
    //   document.title = "Tests";
    //   return <Tests />;
    // } else if (currentPage.name === "Applications") {
    //   document.title = "Applications";
    //   return <Applications />;
    // } else if (currentPage.name === "Tuition") {
    //   document.title = "Tuition";
    //   return <Tuition />;
    // } else if (currentPage.name === "Contact") {
    //   document.title = "Contact";
    //   return <Contact />;
    // } else if (currentPage.name === "Donate") {
    //   document.title = "Donate";
    //   return <Donate />;
    // }
  };

  return (
    <>
      <PageContent>{renderPage()}</PageContent>
    </>
  );
};

export default Page;
