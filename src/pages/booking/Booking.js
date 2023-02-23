import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
const Booking = () => {
    const place = useLoaderData();
    // const hotels = places.hotels;
    // console.log(hotels)
    console.log(place.id)
    const [date, setDate] = useState(new Date());
    const onChange = date =>{
        setDate(date)
    }
    return (
        <div className='lg:flex justify-around  lg:p-20 p-10 pt-0 pb-2 bg-slate-900'>
            <div className='text-white lg:w-1/2 mb-5 lg:mb-0'>
                <h1 className='text-5xl mb-5'>{place.placeName}</h1>
                <p className=' text-base text-justify'>{place.detail}</p>
            </div>
            <div className=' '>
            <Calendar onChange={onChange} value={date} />
            <Link to={`/hotel/${place.id}`} className=' btn bg-sky-600 mt-5 w-full hover:text-sky-600'><button >Start Booking</button></Link>
            
            </div>
        </div>
    );
};

export default Booking;