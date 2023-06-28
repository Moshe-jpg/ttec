import React from "react";
import Home from "../Home";
import About from "../About";
import Gallery from "../Gallery";
import Tuition from "../Tuition";
import Applications from "../Applications";
import Tests from "../Tests";
import Contact from "../Contact";
import PageContent from "../PageContent";

const Page = ({ currentPage, setCurrentPage, pages }) => {
  const renderPage = () => {
    if (currentPage.name === "Home") {
      document.title =
        "Home | TTEC | Thornhill Torah Education Centre | Toronto's Post Israel Beis Medrash";
      return <Home pages={pages} setCurrentPage={setCurrentPage} />;
    } else if (currentPage.name === "About") {
      document.title =
        "About | TTEC | Thornhill Torah Education Centre | Toronto's Post Israel Beis Medrash";
      return <About pages={pages} setCurrentPage={setCurrentPage} />;
    } else if (currentPage.name === "Gallery") {
      document.title =
        "Gallery | TTEC | Thornhill Torah Education Centre | Toronto's Post Israel Beis Medrash";
      return <Gallery />;
    } else if (currentPage.name === "Tuition") {
      document.title =
        "Tuition | TTEC | Thornhill Torah Education Centre | Toronto's Post Israel Beis Medrash";
      return <Tuition />;
    } else if (currentPage.name === "Applications") {
      document.title =
        "Applications | TTEC | Thornhill Torah Education Centre | Toronto's Post Israel Beis Medrash";
      return <Applications />;
    } else if (currentPage.name === "Tests") {
      document.title =
        "Tests | TTEC | Thornhill Torah Education Centre | Toronto's Post Israel Beis Medrash";
      return <Tests />;
    } else if (currentPage.name === "Contact") {
      document.title =
        "Contact | TTEC | Thornhill Torah Education Centre | Toronto's Post Israel Beis Medrash";
      return <Contact />;
    }
  };

  return (
    <>
      <PageContent>{renderPage()}</PageContent>
    </>
  );
};

export default Page;
