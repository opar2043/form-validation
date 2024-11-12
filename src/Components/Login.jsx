import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { CounContext } from "../App";

const Login = () => {

  const navigate = useNavigate()
  const {signInUser} = useContext(CounContext)


  function handleLoginUser(e){
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.pass.value;
    // console.log(email , pass);

    signInUser(email , pass) 
    .then(res => {
        console.log(res.user);
        e.target.reset()
        navigate('/')
    })
    .catch(err => {
        console.log(err.messeage);
    })

}


  return (
    <div>
         <div className="">
        <div className="card py-2 bg-base-100 w-9/12 max-w-sm border mx-auto mt-10 shrink-0 shadow-2xl">

        <h2 className="text-xl font-bold text-center">Log In Now!</h2>
      <form className="card-body" onSubmit={handleLoginUser}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="name" name="name" placeholder="name" className="input input-bordered" required />
        </div>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning">Log in</button>
        </div>
      </form>
       <p className="font-semibold text-center px-3 py-1">New To this Website please <Link to={'/signin'}> <span className=" font-bold text-yellow-600">Sign Up</span> </Link></p>
    </div>
    </div>
    </div>
  )
}

export default Login