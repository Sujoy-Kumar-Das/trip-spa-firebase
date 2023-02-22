import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../contexts/authProviderContext/AuthContextProvider";
import { toast } from "react-hot-toast";
const Singup = () => {
    const {singInWithGoogle,createUser,verify,updateUser} = useContext(AuthContext)
    const handleSubmiReg = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            updateUserDetail(name)
            verifyEmail()
            toast.success('Please check your email address')
            
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
    const verifyEmail = ()=>{
      verify()
      .then(()=>{})
      .catch(error=>console.error(error))
    }

    const updateUserDetail = name =>{
      const profile = {displayName:name};
      updateUser(profile)
      .then(()=>{
        console.log('profile updated')
      })
      .catch(error=>console.log(error))
    }
  return (
    <div className="hero min-h-screen bg-slate-900">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-white mb-3">Register now !</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className=" text-center">
            <button onClick={handleGoogleLogin} className=" btn btn-primary mx-3 mt-4">
              <FaGoogle />
            </button>
            <button className=" btn btn-primary mx-5 mt-4">
              <FaFacebook />
            </button>
          </div>
          <form onSubmit={handleSubmiReg} className="card-body pt-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
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
                className="input input-bordered"
              />
              <label className="label">
                <p>
                  Already have an account{" "}
                  <Link to="/login" className="label-text-alt link link-hover">
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
