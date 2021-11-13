import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
// import Nav from "./components/nav/Nav";
import ProductsList from "./components/productsList/ProductsList";
import Skills from "./components/skills/Skills";
// import Slider from "./components/slider/Slider";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={darkMode ? 'app dark': 'app'} >
      {/* style={{backgroundColor: darkMode ? "#222" : "#fff", color: darkMode && "#fff"}} */}
      {/* <Nav/> */}
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
