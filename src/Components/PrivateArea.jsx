import { useContext } from "react"
import { CounContext } from "../App"
import { Navigate, useNavigate } from "react-router-dom";


const PrivateArea = ({children}) => {

    console.log(children);

   

    const {user , loading} = useContext(CounContext);
    console.log(user , 'here are private area');

    if(loading){
        return <span className="flex justify-center loading loading-spinner loading-lg"></span>;
    }

    if(user){
        return children;
    }
  return (
    <Navigate to='/login'></Navigate>
  )
}

export default PrivateArea