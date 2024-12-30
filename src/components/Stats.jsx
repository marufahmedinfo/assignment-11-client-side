import React, { useEffect, useState } from 'react';

const Stats = () => {
  const [state , setState] = useState([]);
  useEffect(()=>{
    fetch('https://assignment-11-server-kappa-inky.vercel.app/tutors')
    .then(res => res.json())
    .then(data => setState(data))
  },[])
  return (


    <section className="bg-gray-100 py-10 my-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* Stat Item 1 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{state?.length}+</h2>
            <p className="text-gray-600">Tutors Review</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">4.8 ★</h2>
            <p className="text-gray-600">on the App Store</p>
          </div>
          {/* Stat Item 3 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">9+</h2>
            <p className="text-gray-600">Subjects taught</p>
          </div>
          {/* Stat Item 4 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">20+</h2>
            <p className="text-gray-600">Tutor Users</p>
          </div>
          {/* Stat Item 5 */}
        </div>
      </div>
    </section>
  );
};

export default Stats;