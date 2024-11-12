import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,  onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import auth from './Components/_firebase.init'
import Footer from './Components/Footer'

export const CounContext = createContext()

function App() {

  const [ user , setUser] = useState(null)
  const [ loading , setloading] = useState(true)
  const goggleLogin = new GoogleAuthProvider()

     function createUser(email , pass){
          return createUserWithEmailAndPassword(auth, email , pass)  
          setloading(true) 
     }

   function signInUser(email , pass){
    return signInWithEmailAndPassword(auth , email , pass);
    setloading(true) 
     
   }

   function googleSignin(){
         return signInWithPopup(auth , goggleLogin)
   }

   useEffect(()=>{
   const subscribe = onAuthStateChanged(auth , currentUser => {
      if(currentUser){
        console.log('current user here', currentUser);
        setUser(currentUser)
        setloading(false) 

      }else{
        console.log('no user here')
        setUser(null)
      }
     })

     return () => {
      subscribe();
     }


   },[])

   function signOutUser(){
       return signOut(auth)
       setloading(true) 
   }

    
     const word = {
       createUser,
       signInUser,
       user,
       signOutUser,
       loading,
       googleSignin
     }


  return (
   <div className='mx-auto w-11/12'>


     <CounContext.Provider value={word }>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
     </CounContext.Provider>

        
   </div>
  )
}

export default App
