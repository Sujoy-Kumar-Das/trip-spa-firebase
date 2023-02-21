import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/home/Home';
import LeftsideDetail from '../pages/home/leftSideDetail/LeftsideDetail';
import RightSideSwiper from '../pages/home/rightSideSwiper/RightSideSwiper';
import Header from '../pages/shared/header/Header';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;