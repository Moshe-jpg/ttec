import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Gallery",
    },
    {
      name: "Tuition",
    },
    {
      name: "Applications",
    },
    {
      name: "Tests",
    },
    {
      name: "Contact",
    },
    {
      name: "Donate",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
      <Navbar
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div id="top"></div>
      <main>
        <Page
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Page>
      </main>
      <Footer pages={pages} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
