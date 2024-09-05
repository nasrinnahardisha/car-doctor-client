import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const BookService = () => {

    const {user} = useContext(AuthContext);
    const[checkOuts, setCheckOuts] = useState([]);
    const axiosSecure = useAxiosSecure();



    // const url = `https://car-doctor-server-with-jwt-three.vercel.app/checkOuts?email=${user?.email}`;
    const url = `/checkOuts?email=${user?.email}`;


    useEffect(() => {
        //1.steps::.. axios.get(url,{withCredentials:true})
        // .then(res =>{
        //     setCheckOuts(res.data);
        // })

        //2: steps::  fetch dile {Credentials:'include'} hobe
        // fetch(url ,{credentials: 'include'})
        // .then(res => res.json())
        // .then(data => setCheckOuts(data))

        //3::upai::

          axiosSecure.get(url)
          .then(res => setCheckOuts(res.data))



    }, [url,axiosSecure]);




    const handleDelete = id =>{
        const proceed = confirm('Are you sure you want to delete');
        if(proceed){
            fetch(`https://car-doctor-server-with-jwt-three.vercel.app/checkOuts/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = checkOuts.filter(booking => booking._id !== id);
                    setCheckOuts(remaining);
                }
            })
        }
      }



      const handleBookingConfirm = id =>{
        fetch(`https://car-doctor-server-with-jwt-three.vercel.app/checkOuts/${id}`,{
          method:'PATCH',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.modifiedCount > 0){
                //update state
                const remaining = checkOuts.filter(booking => booking._id !== id);
                const updated = checkOuts.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setCheckOuts(newBookings);
            }
        })
      }
 return (
    <div>
    <h2 className="text-5xl">Your bookings: {checkOuts.length}</h2>
    <div className="overflow-x-auto w-full">
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr> 
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </th>
                    <th>Image</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    checkOuts.map(booking => <BookingRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleBookingConfirm={handleBookingConfirm}
                    ></BookingRow>)
                }
            </tbody>

        </table>
    </div>
</div>
    );
};

export default BookService;