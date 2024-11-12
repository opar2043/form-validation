import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"

import { CounContext } from "../App";

const Signin = () => {

  const navigate = useNavigate()
   const {createUser , googleSignin} = useContext(CounContext);
   console.log(createUser);

    function handleRegister(e){
        e.preventDefault();

        const email = e.target.email.value;
        const pass = e.target.pass.value;
        // console.log(email , pass);
  
        createUser(email , pass) 
        .then(res => {
            console.log(res.user);
            navigate('/')
            e.target.reset()
        })
        .catch(err => {
            console.log(err.messeage);
        })
    }

    function handleGoogleLogin(){
      googleSignin()
      .then(res => res.user)
      .catch(err => err)
      navigate('/')
    }

  return (
    <div className="">
        <div className="card py-2 bg-base-100 w-9/12 max-w-sm border mx-auto mt-10 shrink-0 shadow-2xl">
        <h2 className="text-xl font-bold text-center">Sign Up Now!</h2>

      <form className="card-body" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <p>
            <button className="btn w-full btn-accent mt-2" onClick={handleGoogleLogin}>Register with Google</button>
          </p>
        </div>
      </form>
       <p className="font-semibold text-center px-3 py-1">Already have an account? please <Link to={'/login'}> <span className=" font-bold text-violet-800">Log In</span> </Link></p>
    </div>
    </div>
  )
}

export default Signin