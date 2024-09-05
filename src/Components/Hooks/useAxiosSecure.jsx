import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


//sourse::axios.Request Config
const axiosSecure = axios.create({
    baseURL:'https://car-doctor-server-with-jwt-three.vercel.app',
    withCredentials:true
})



//ata bookingServices a use hobe
const useAxiosSecure = () => {
const {logOut} = useAuth();
const navigate = useNavigate();
    useEffect(() =>{

        axiosSecure.interceptors.response.use(res =>{
            return res;
        }, error =>{
            console.log('error tracked in  the interceptors', error.message);
            if(error.response.status === 401 || error.response.status === 403) {
                // console.log('logOut the user')
                logOut()
                .then(() =>{
                       navigate('/logIn')
                })
                .catch(error =>{
                    console.log(error);
                })
            }
        })
    })








    return axiosSecure;
};

export default useAxiosSecure;