import { useContext, useEffect, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
// import Nav from "./components/nav/Nav";
import ProductsList from "./components/productsList/ProductsList";
import Skills from "./components/skills/Skills";
// import Slider from "./components/slider/Slider";
import Toggle from "./components/toggle/Toggle";
import ProgressBar from "./components/progressbar/ProgressBar";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [width,setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // setWidth(Math.floor((window.scrollY/3111)* 100));
      // setWidth((window.scrollY/3111)*100);
      setWidth((window.scrollY/(document.body.offsetHeight - window.innerHeight))*100);
    })
  },[width]);
  return (
    <div className={darkMode ? 'app dark': 'app'} >
      {/* style={{backgroundColor: darkMode ? "#222" : "#fff", color: darkMode && "#fff"}} */}
      {/* <Nav/> */}
      <ProgressBar width={width}/>
      <Toggle/>
      <Intro/>
      <About/>
      <Skills/>
      <ProductsList/>
      <Contact/>
    </div>
  );
}

export default App;
