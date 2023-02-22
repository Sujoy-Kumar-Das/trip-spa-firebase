import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authProviderContext/AuthContextProvider";

const UserInfo = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className=" flex justify-center mt-16 p-5 lg:p-0">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Wellcome {user?.displayName}</h2>
          <p>Your Email :- {user?.email}</p>
          <p>Email Verified :- {user?.emailVerified ? 'Yes':'No'}</p>
          <p>Phone number :- {user?.phoneNumber ?"+880"+ user?.phoneNumber:'+880'}</p>
          <div className="card-actions justify-end">
            
            <Link className="btn w-full" to='/home'><button >Go back to home</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
