import React, { useEffect, useState } from 'react'
import '@styles/Carousel.scss';
import arrow from '@icons/arrow.png';

const Carousel = ({ id, fotos = [], footer = false }) => {
    const [carouselId, setCarouselId] = useState('');

    useEffect(() => {
        const slides = document.querySelectorAll(`.id-${id}`);

        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${indx * 100}%)`;

        });

        const nextSlide = document.querySelector(`.btn-nextC${id}`);

        // current slide counter
        let curSlide = 0;
        // maximum number of slides
        let maxSlide = slides.length - 1;

        // add event listener and navigation functionality
        nextSlide.addEventListener("click", function () {
            // check if current slide is the last and reset current slide
            if (curSlide === maxSlide) {
                curSlide = 0;
            } else {
                curSlide++;
            }

            //   move slide by -100%
            slides.forEach((slide, indx) => {
                slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
            });
        });

        const prevSlide = document.querySelector(`.btn-prevC${id}`);

        // add event listener and navigation functionality
        prevSlide.addEventListener("click", function () {
            // check if current slide is the first and reset current slide to last
            if (curSlide === 0) {
                curSlide = maxSlide;
            } else {
                curSlide--;
            }

            //   move slide by 100%
            slides.forEach((slide, indx) => {
                slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
            });
        });
    }, []);

    return (
        <>
            <div className="sliderC">
                <div className='slider-backdropC'></div>
                {
                    fotos.map((x, index) => (
                        <div key={index} className={`slideC id-${id}`} style={{ backgroundImage: `url(${x})` }}>
                        </div>
                    ))
                }

                <button className={`btn-carouselC btn-nextC btn-nextC${id}`}>
                    <img height={20} src={arrow} />
                </button>
                <button className={`btn-carouselC btn-prevC btn-prevC${id}`}>
                    <img height={20} style={{ rotate: '180deg' }} src={arrow} />
                </button>
            </div>
        </>
    );
}

export default Carousel;