import React, {cloneElement, useEffect, useState, Children} from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import './Slider.scss'

const Slider = ({children}) => {

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState([])
    const [seconds, setSeconds] = useState(60);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {

            let newOffset = currentOffset + 100

            if(newOffset > 0) newOffset = -(100 * (pages.length - 1))

            return newOffset
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {

            let newOffset = currentOffset - 100

            const maxOffset = -(100 * (pages.length - 1))

            if (newOffset < maxOffset) newOffset = 0

            return newOffset
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: '100vw',
                        maxWidth: '100vw',
                    },
                })
            })
        )
    }, [children])

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
        }, 30000)
        setOffset((currentOffset) => {

            let newOffset = currentOffset - 100

            const maxOffset = -(100 * (pages.length - 1))

            if (newOffset < maxOffset) newOffset = 0

            return newOffset
        })
        return () => clearInterval(timer)
    }, [seconds]);

    return (
        <div className='slider'>
            <FaChevronLeft className='arrow-left' onClick={handleLeftArrowClick}/>
            <div className='window'>
                <div className='items-wrapper' style={{transform: `translateX(${offset}vw)`}}>
                    {pages}
                </div>
            </div>
            <FaChevronRight className='arrow-right' onClick={handleRightArrowClick}/>
        </div>
    );
};

export default Slider;