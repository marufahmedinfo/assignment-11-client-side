import React, { useState } from "react";
import sl1 from '../assets/img/DSC_0259.png'
import sl2 from '../assets/img/extra (1).jpeg'
import sl3 from '../assets/img/extra (1).jpg'
import sl4 from '../assets/img/extra (2).jpg'

const ExtraOne = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            name: "Livinia",
            role: "English tutor",
            quote: "With just a few lessons, you can already see the difference.",
            author: "Filip",
            description: "English learner on Preply",
            image: `${sl2}`
        },
        {
            name: "Janis",
            role: "Arabic tutor",
            quote: "With just a few lessons, you can already see the difference.",
            author: "Filip",
            description: "Arabic learner on Preply",
            image: `${sl3}`
        },
        {
            name: "kadis",
            role: "English tutor",
            quote: "With just a few lessons, you can already see the difference.",
            author: "Flip",
            description: "English learner on Preply",
            image: `${sl4}`
        },
        {
            name: "Maruf Ahmed",
            role: "Bangla tutor",
            quote: "With just a few lessons, you can already see the difference.",
            author: "Filip",
            description: "Bangla learner on Preply",
            image: `${sl1}`
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="flex flex-col items-center justify-center my-16">
            <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">Find the right tutor for you.</h1>
            <p className="text-lg text-gray-600 mb-8">
                With over 30,000 tutors and 1M+ learners, we know language learning.
            </p>
            <div className="relative flex items-center">
                <button
                    className="absolute left-0 bg-gray-200 rounded-full p-2 hover:bg-gray-300 font-bold text-3xl"
                    onClick={prevSlide}
                >
                    &#8249;
                </button>
                <div className="flex gap-5 p-12 border rounded-lg shadow-lg md:w-[800px]">
                    <div>
                        <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].name}
                            className="w-28 h-28 rounded-full mb-4 md:ml-10 object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{slides[currentSlide].name}</h3>
                        <span className="text-sm text-green-600 font-medium">
                            {slides[currentSlide].role}
                        </span>
                        <blockquote className="text-center italic my-4">
                            "{slides[currentSlide].quote}"
                        </blockquote>
                        <p className="text-gray-600 text-sm">
                            - {slides[currentSlide].author}, {slides[currentSlide].description}
                        </p>
                    </div>
                </div>
                <button
                    className="absolute right-0 bg-gray-200 rounded-full p-2 font-bold text-3xl hover:bg-gray-300"
                    onClick={nextSlide}
                >
                    &#8250;
                </button>
            </div>
            <div className="flex mt-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full ${index === currentSlide ? "bg-black" : "bg-gray-400"
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ExtraOne;
