import React, { useEffect, useState } from 'react';
import bgimg1 from '../assets/img/banner (3).jpg'
import bgimg2 from '../assets/img/banner (2).jpg'
import bgimg3 from '../assets/img/banner (4).jpg'
import bgimg4 from '../assets/img/banner (1).jpg'
import bgimg5 from '../assets/img/banner (5).jpg'


const Banner = () => {
    const slides = [
        { id: 1, image: bgimg1, caption: "Slide 1 Caption" },
        { id: 1, image: bgimg2, caption: "Slide 1 Caption" },
        { id: 1, image: bgimg3, caption: "Slide 1 Caption" },
        { id: 1, image: bgimg4, caption: "Slide 1 Caption" },
        { id: 1, image: bgimg5, caption: "Slide 1 Caption" },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    // Auto slide every 3 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 3000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="relative w-full mx-auto overflow-hidden rounded-t-xl">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="min-w-full md:h-[500px]">
                        <img
                            src={slide.image}
                            alt={slide.caption}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-purple-500" : "bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Banner;