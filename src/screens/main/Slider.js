import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import './slider.css';
import SliderComponent from "./SliderComponent";
import Watch from '../../images/watch.svg';
import Security from '../../images/security.svg';
import Magnifier from '../../images/magnifier.svg';

export default function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
        };
    return (
        <div>
            <Slider {...settings}>
            <div className="sliderContainer">
                <SliderComponent content="Высокая и оперативная скорость обработки заявки" img={Watch}/>
            </div>
            <div className="sliderContainer">
                <SliderComponent content="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос" img={Magnifier}/>
            </div>
            <div className="sliderContainer">
                <SliderComponent content="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству" img={Security}/>
            </div>
            <div className="sliderContainer">
                <SliderComponent content="Высокая и оперативная скорость обработки заявки" img={Watch}/>
            </div>
            <div className="sliderContainer">
                <SliderComponent content="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос" img={Magnifier}/>
            </div>
            <div className="sliderContainer">
                <SliderComponent content="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству" img={Security}/>
            </div>
            <div className="sliderContainer">
                <SliderComponent content="Высокая и оперативная скорость обработки заявки" img={Watch}/>
            </div>
            <div className="sliderContainer">
                <SliderComponent content="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос" img={Magnifier}/>
            </div>
            <div className="sliderContainer">
                <SliderComponent content="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству" img={Security}/>
            </div>
            
            </Slider>
        </div>
        );
}