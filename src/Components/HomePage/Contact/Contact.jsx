import { LiaBusinessTimeSolid } from "react-icons/lia";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
const Contact = () => {
    return (
        <div className="flex justify-evenly bg-black text-white h-[250px] items-center">
            <div className="flex gap-3">
                <div className="icon mt-3 text-4xl text-red-600"><LiaBusinessTimeSolid /></div>
                <div className="text">
                    <p>We are open monday-friday </p>
                    <h3 className="text-2xl">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex gap-3">
            <div className="icon mt-3 text-4xl text-red-600"><FaPhoneVolume /></div>
                <div className="text">
                    <p>Have a question? </p>
                    <h3 className="text-2xl">+2546 251 2658</h3>
                </div>
            </div>
            <div className="flex gap-3">
            <div className="icon mt-3 text-4xl text-red-600"><IoLocationSharp /></div>
                <div className="text">
                    <p>Need a repair? our address</p>
                    <h3 className="text-2xl">Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;