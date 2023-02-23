import React from "react";

const HotelCard = ({ hotel }) => {
  const { name, hotelImg, price, ratting } = hotel;
  // console.log(hotel)
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mb-5 w-full" >
      <figure>
        <img
        
          src={hotelImg}
          className=" lg:h-56 h-52 w-80" 
          alt="Album"
        //   style={{width:'100%',height:'100%'}}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price :- {price}</p>
        <p>Ratting :- {ratting}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
