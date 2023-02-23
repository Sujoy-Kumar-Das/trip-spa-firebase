import React from "react";
import { useLoaderData } from "react-router-dom";
import HotelCard from "./hotelCard/HotelCard";

const Hotel = () => {
  const places = useLoaderData();
  const hotels = places.hotels;
  // console.log(hotels)
  return (
    <div className=" lg:flex justify-center bg-slate-900 lg:mt-10  m-0 p-10 lg:p-0">
      <div>
        {hotels.map(hotel=><HotelCard hotel={hotel}></HotelCard>)}
      </div>
    </div>
  );
};

export default Hotel;
