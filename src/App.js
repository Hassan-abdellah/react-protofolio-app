import { useContext, useEffect, useState } from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Nav from "./components/nav/Nav";
import ProductsList from "./components/productsList/ProductsList";
import Skills from "./components/skills/Skills";
import ProgressBar from "./components/progressbar/ProgressBar";
import ScrollToTop from "./components/scrollBtn/ScrollToTop"
import { ThemeContext } from "./context";
import Modal from "./components/modal/Modal";
import { AnimatePresence } from "framer-motion";
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [width,setWidth] = useState(0);
  const [scrollBtn , setScrollBtn] = useState(false);
  const [isModal,setIsModal] = useState(false);
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
      <Nav isModal={isModal} setIsModal={setIsModal}/>
      <ProgressBar width={width}/>
      <Intro isModal={isModal} setIsModal={setIsModal}/>
      <About/>
      <Skills/>
      <ProductsList/>
      <ScrollToTop scrollBtn={scrollBtn}/>
      <AnimatePresence>
        {isModal && (
          <Modal isModal={isModal} setIsModal={setIsModal}/>
        )}
      </AnimatePresence>
      {/* <ToastContainer/> */}
    </div>
  );
}

export default App;
