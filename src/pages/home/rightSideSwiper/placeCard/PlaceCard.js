import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = ({place}) => {
    const {placeName,placeImg} = place
    return (
        <div>
            <Link to='/leftsidedetail'><img src={placeImg} alt="" /></Link>
        </div>
    );
};

export default PlaceCard;