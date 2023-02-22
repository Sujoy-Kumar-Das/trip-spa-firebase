import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RightSideSwiper from './rightSideSwiper/RightSideSwiper';

const Home = () => {
  const [places,setPlaces] = useState([]);
  const [selectedPlace,setSelectedPlace] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:5000/place')
    .then(res => res.json())
    .then(data => setPlaces(data))
  },[])
  const handelUsePlace = (id)=>{
    const userPlace = places.find(place => place.id === id)
    setSelectedPlace(userPlace)
    // console.log(selectedPlace)
  }

  return (
    <div className=" lg:grid grid-cols-3 mt-10">
      <div className=' text-white flex justify-center  lg:p-20 px-10 '>
      {selectedPlace ?<div>
        <h2 className='text-5xl mb-5'>{selectedPlace?.placeName}</h2>
        {selectedPlace?.detail.length > 200 ? <p className=' text-justify'>{selectedPlace?.detail.slice(0,200)+ '...'}</p>:<p>{selectedPlace?.detail}</p>}
         
         {selectedPlace &&<Link to={`booking/${selectedPlace?.id}`}><button className="btn bg-orange-500 mt-5">Show Detail</button></Link>}
        </div>:<p className='text-2xl mt-5'>Please select a place </p>}
      </div>
      <div className=' col-span-2 mt-24'>
        <RightSideSwiper handelUsePlace={handelUsePlace} places={places}></RightSideSwiper>
      </div>
    </div>
  );
};

export default Home;