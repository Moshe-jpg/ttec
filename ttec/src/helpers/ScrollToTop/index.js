

const ScrollToTop = () => {
  const top = document.querySelector("#top");

  top.scrollIntoView({ behavior: "smooth" });
};

export default ScrollToTop;
