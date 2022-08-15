import React, { useEffect, useState } from 'react'
import '@styles/Carousel.scss';
import arrow from '@icons/arrow.png';
const Carousel = ({ id, fotos = [] }) => {
    const [carouselId, setCarouselId] = useState('');

    useEffect(() => {
        const slides = document.querySelectorAll(`.id-${id}`);

        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${indx * 100}%)`;

        });

        const nextSlide = document.querySelector(`.btn-next${id}`);

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

        const prevSlide = document.querySelector(`.btn-prev${id}`);

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
        <div className="slider">
            <div className='slider-backdrop'></div>

            {
                fotos.map((x, index) => (
                    <div key={index} className={`slide id-${id}`} style={{ backgroundImage: `url(${x})` }}>
                    </div>
                ))
            }

            <button className={`btn-carousel btn-next btn-next${id}`}>
                <img height={20} src={arrow} />
            </button>
            <button className={`btn-carousel btn-prev btn-prev${id}`}>
                <img height={20} style={{ rotate: '180deg' }} src={arrow} />
            </button>
        </div>
    );
}

export default Carousel;