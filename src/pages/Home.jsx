import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Stats from '../components/Stats';
import Tutors from '../shared/Tutors';
import ExtraOne from '../layout/ExtraOne';
import HowItWorks from '../layout/HowItWorks';
import PaidToTeach from '../layout/PaidToTeach';


const Home = () => {


  // Sample categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://assignment-11-server-kappa-inky.vercel.app/language')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div>
      <Carousel></Carousel>

      <Stats></Stats>




      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 mb-8">
            Language Categories
          </h2>
          <div className="max-w-7xl mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => <Tutors key={category.id} category={category}></Tutors>)}
            </div>
          </div>
        </div>
      </section>

      <ExtraOne></ExtraOne>

      <HowItWorks></HowItWorks>

      <PaidToTeach></PaidToTeach>
    </div>
  );
};

export default Home;