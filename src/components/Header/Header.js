import React from 'react';
import './Header.scss'
import logo from '../../assets/images/marvel-logo.png'
import characters from '../../assets/images/marvel-characters.jpg'
import Slider from "../Slider/Slider";

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} alt="" />
            </div>
            <Slider>
                <div className='header-slider-item item-1'>hello, it's my first pet project on React</div>
                <div className='header-slider-item item-2'>Here you can look at all the characters of the MARVEL universe and read information about them taken from the official website (if it is not classified). SLIDER AND FOOTER UNDER DEVELOPMENT</div>
                <div className='header-slider-item item-3'><img src={characters} alt="" width='100%'/></div>
            </Slider>
        </div>
    );
};

export default Header;