import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";

 export const AuthContext = createContext(null);
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


  //createUser
  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

//signIn
    const signIn = (email, password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

//signOut
const logOut = () =>{
  setLoading(true);
  return signOut(auth);
}

    //byDefault user dhore rakhe
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        // const userEmail = currentUser?.email || user?.email;
        const userEmail = currentUser?.email;
        const loggedUser = { email: userEmail};
      setUser(currentUser);
      // console.log('current User', currentUser);
      setLoading(false);
      //if user exists then issue a token


      if(currentUser){
        
        axios.post('https://car-doctor-server-with-jwt-three.vercel.app/jwt',loggedUser, {withCredentials: true})
        .then(res => {
          // console.log('token response',res.data);
        })
      }
      else{
          axios.post('https://car-doctor-server-with-jwt-three.vercel.app/logOut',loggedUser, {withCredentials: true})
          .then(res =>{
            console.log('token response',res.data);
          })
        }


    });
    return () =>{
      return unsubscribe();
    }

  }, [])








    const authInfo = {
        user,
        loading,
        createUser ,
        signIn,
        logOut,

    }
    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;