import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/about/About";
import UserInfo from "../pages/AboutUserInfo/UserInfo";
import Blog from "../pages/blog/Blog";
import Booking from "../pages/booking/Booking";
import Home from "../pages/home/Home";
import LeftsideDetail from "../pages/home/leftSideDetail/LeftsideDetail";
import Hotel from "../pages/hotel/Hotel";
import Login from "../pages/login/Login";
import Singup from "../pages/singup/Singup";

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
            },{
                path:"/booking/:id",
                loader:({params})=>{
                    console.log(params.id);
                    const id = params.id;
                    return fetch(`http://localhost:5000/place/${id}`)
                    
                },
                element:<Booking></Booking>
                
            },
            {
                path:'/leftsidedetail',
                element:<LeftsideDetail></LeftsideDetail>
            },  
            {
                path:'/hotel',
                element:<Hotel></Hotel>
            },{
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Singup></Singup>
            },
            {
                path:'/userInfo',
                element:<UserInfo></UserInfo>
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