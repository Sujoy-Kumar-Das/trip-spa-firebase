import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import LeftsideDetail from "../pages/home/leftSideDetail/LeftsideDetail";
import Hotel from "../pages/hotel/Hotel";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/leftsidedetail',
                element:<LeftsideDetail></LeftsideDetail>
            },  {
                path:'/hotel',
                element:<Hotel></Hotel>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            }
        
        ]
    }
  

])