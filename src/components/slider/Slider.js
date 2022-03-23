import React from 'react';
import {Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import './slider.css';

// photos importing
import ReactJS from '../../images/slids/react.svg';
import Html from '../../images/slids/html.svg';
import Linux from '../../images/slids/linux.svg';
import Postman from '../../images/slids/postman.svg';
import Mongodb from '../../images/slids/mongodb.svg';
import Js from '../../images/slids/js.svg';
import Nodejs from '../../images/slids/nodejs.svg';
import Git from '../../images/slids/git.svg';
import Github from '../../images/slids/github.svg';
import Css from '../../images/slids/css3.svg';
import Tailwind from '../../images/slids/tailwindcss.svg';
import Socket from '../../images/slids/socket.svg';


// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination"
// import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

const Slider = () => {
    return (
        <div className="slider">
            <Swiper spaceBetween={30}
                slidesPerView={4}  
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} 
                pagination={{
                "clickable": true
                }}
                className="slider-container" >
                <SwiperSlide className="slide">
                    {/* <Tippy content="HTML">    */}
                        <img src={Html} alt="html-icon" className="slide-img" />
                    {/* </Tippy> */}
                </SwiperSlide>
                <SwiperSlide className="slide">
                    {/* <Tippy content="CSS"> */}
                        <img src={Css} alt="css-icon" className="slide-img" />
                    {/* </Tippy> */}
                </SwiperSlide>
                <SwiperSlide className="slide">
                    {/* <Tippy content="TailwindCSS"> */}
                        <img src={Tailwind} alt="tailwindcss-icon" className="slide-img" />
                    {/* </Tippy> */}
                </SwiperSlide>
                <SwiperSlide className="slide">
                    {/* <Tippy content="Javascript"> */}
                        <img src={Js} alt="js-icon" className="slide-img" />
                    {/* </Tippy> */}
                </SwiperSlide>
                <SwiperSlide className="slide">
                    {/* <Tippy content="React Js"> */}
                        <img src={ReactJS} alt="react-icon" className="slide-img" />
                    {/* </Tippy> */}
                </SwiperSlide>
                <SwiperSlide className="slide">
                    {/* <Tippy content="Node Js"> */}
                        <img src={Nodejs} alt="nodejs-icon" className="slide-img" />
                    {/* </Tippy> */}
                </SwiperSlide>
                <SwiperSlide className="slide">
                    {/* <Tippy content="Postman"> */}
                        <img src={Postman} alt="postman-icon" className="slide-img" />
                    {/* </Tippy> */}
                </SwiperSlide>
                <SwiperSlide className="slide">
                    {/* <Tippy content="Mongo DB"> */}
                        <img src={Mongodb} alt="mongodb-icon" className="slide-img" />
                    {/* </Tippy> */}
                </SwiperSlide>
                <SwiperSlide className="slide">
                    {/* <Tippy content="Socket io"> */}
                        <img src={Socket} alt="socketio-icon" className="slide-img" />
                    {/* </Tippy> */}
                </SwiperSlide>
                <SwiperSlide className="slide">
                    {/* <Tippy content="Github"> */}
                        <img src={Github} alt="github-icon" className="slide-img" />
                    {/* </Tippy> */}
                </SwiperSlide>
                <SwiperSlide className="slide">
                    {/* <Tippy content="Git"> */}
                        <img src={Git} alt="git-icon" className="slide-img" />
                    {/* </Tippy> */}
                </SwiperSlide>
                <SwiperSlide className="slide">
                    {/* <Tippy content="Linux OS"> */}
                        <img src={Linux} alt="linux-icon" className="slide-img" />
                    {/* </Tippy> */}
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider;
