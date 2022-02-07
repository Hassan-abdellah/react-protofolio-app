import { useContext, useEffect, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Nav from "./components/nav/Nav";
import ProductsList from "./components/productsList/ProductsList";
import Skills from "./components/skills/Skills";
// import Slider from "./components/slider/Slider";
import Toggle from "./components/toggle/Toggle";
import ProgressBar from "./components/progressbar/ProgressBar";
import ScrollToTop from "./components/scrollBtn/ScrollToTop"
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [width,setWidth] = useState(0);
  const [scrollBtn , setScrollBtn] = useState(false);
  const showScrollBtn = () => {
    if(window.scrollY >= 700){
      setScrollBtn(true);
    }else{
      setScrollBtn(false);
    }
  }
  window.addEventListener('scroll', showScrollBtn);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // setWidth(Math.floor((window.scrollY/3111)* 100));
      // setWidth((window.scrollY/3111)*100);
      setWidth((window.scrollY/(document.body.offsetHeight - window.innerHeight))*100);
    })
  },[width]);
  return (
    <div className={darkMode ? 'app dark': 'app'} >
      <Nav/>
      <ProgressBar width={width}/>
      <Toggle/>
      <Intro/>
      <About/>
      <Skills/>
      <ProductsList/>
      <Contact/>
      <ScrollToTop scrollBtn={scrollBtn}/>
    </div>
  );
}

export default App;
