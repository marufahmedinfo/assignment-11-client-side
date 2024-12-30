import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CatagoryDetailsCard from './CatagoryDetailsCard';

const CatagoryDetails = () => {
    const {language} = useParams();
    const [categoryData, setCategoriesData] = useState(null)
    useEffect(()=> {
        fetch(`https://assignment-11-server-kappa-inky.vercel.app/tutors/${language}`)
        .then(res => res.json())
        .then(data => setCategoriesData(data))
    },[language])


    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-12 my-16'>
            {
                categoryData?.map(item => <CatagoryDetailsCard key={item._id} item={item}></CatagoryDetailsCard>)
            }
        </div>
    );
};

export default CatagoryDetails;