import React, { useEffect, useState } from 'react';
import FindTutorsCard from '../../pages/catagory/FindTutorsCard';

const FindTutors = () => {
    const [tutors, setTutors] = useState([]);
    useEffect(() => {
fetch('https://assignment-11-server-kappa-inky.vercel.app/tutors')
.then(res => res.json())
.then(data => setTutors(data))
    }, [])
    return (
        <div className='my-16'>
            <h1 className='text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300'>All Tutors</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                tutors.map(tutor =>  <FindTutorsCard key={tutor._id} tutor={tutor}></FindTutorsCard>)
            }
            </div>
        </div>
    );
};

export default FindTutors;