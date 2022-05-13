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
                <div className='header-slider-item'><span>hello, it's my first pet project on React</span></div>
                <div className='header-slider-item'><span>Here you can look for some information about MARVEL character that you want to now and read information about them taken from the official website <br/> (if it is not classified)</span></div>
                <div className='header-slider-item'><img src={characters} alt="" width='100%'/></div>
            </Slider>
        </div>
    );
};

export default Header;