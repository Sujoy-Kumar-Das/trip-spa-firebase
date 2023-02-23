import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../contexts/authProviderContext/AuthContextProvider";
import { toast } from "react-hot-toast";

const Login = () => {
    const {singInWithGoogle,login,forgotPass} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)
        login(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            if(user.emailVerified){
              navigate('/home')
            }
            else{
              toast.error('Please verify your email address')
            }
        })
        .catch(error => console.error(error))
    }
    const handleGoogleLogin = ()=>{
        singInWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    const [userEmail,setUserEmail] = useState('')
    const handleEmailBlur = event =>{
        const email = event.target.value;
        // console.log(email)
        setUserEmail(email);
    }

    const handleForgotPass = () =>{
        forgotPass(userEmail)
        .then(()=>{
          toast.success('Please check your email address')
        })
        .catch(error => console.error(error))
    }
  return (
    <div className="hero h-screen bg-slate-900">
      <div className="hero-content flex-col ">
      <div className="text-center ">
        <h1 className="text-5xl font-bold text-white mb-3">Login now!</h1>
      </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className=" text-center">
                <button className=" btn btn-primary mx-3 mt-4" onClick={handleGoogleLogin}><FaGoogle /></button>
                <button className=" btn btn-primary mx-5 mt-4"><FaFacebook /></button>
            </div>
          <form onSubmit={handleSubmit} className="card-body pt-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
                onBlur={handleEmailBlur}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
              <label className="label">
                <Link onClick={handleForgotPass} className="label-text-alt link link-hover">
                  Forgot password
                </Link>
              </label>
              <label className="label">
                <p className="label-text-alt">
                  Dont't have accoun?
                  <Link className=" link link-hover" to="/register">
                    {" "}
                    please register
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
