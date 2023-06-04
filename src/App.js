import React, { useContext, useEffect, useState } from "react";
import { Intro, About, Skills, ProductsList, Contact } from "./Sections";
import Nav from "./components/nav/Nav";
import ProgressBar from "./components/progressbar/ProgressBar";
import ScrollToTop from "./components/scrollBtn/ScrollToTop";
import { ThemeContext } from "./context";
import { Toaster } from "react-hot-toast";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [width, setWidth] = useState(0);
  const [scrollBtn, setScrollBtn] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const showScrollBtn = () => {
    if (window.scrollY >= 700) {
      setScrollBtn(true);
    } else {
      setScrollBtn(false);
    }
  };
  window.addEventListener("scroll", showScrollBtn);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWidth(
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
          100
      );
    });
  }, [width]);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Nav
      // isModal={isModal}
      // setIsModal={setIsModal}
      />
      <ProgressBar width={width} />
      <Intro isModal={isModal} setIsModal={setIsModal} />
      <About />
      <Skills />
      <ProductsList />
      <Contact />
      <ScrollToTop scrollBtn={scrollBtn} />
      <Toaster />
    </div>
  );
}

export default App;
