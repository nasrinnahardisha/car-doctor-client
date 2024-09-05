import productImg1 from "../../../assets/images/products/1.png"
import productImg2 from "../../../assets/images/products/2.png"
import productImg3 from "../../../assets/images/products/3.png"
import productImg4 from "../../../assets/images/products/4.png"
import productImg5 from "../../../assets/images/products/5.png"
import productImg6 from "../../../assets/images/products/6.png"
import { FaStar } from "react-icons/fa6";



const Products = () => {
  return (
    <div className="mt-4">
      <div className="text-center space-y-3">
        <h3 className="text-2xl text-red-500">Popular Products</h3>
        <h2 className="text-5xl font-bold">Browse Our Products</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or ransomed <br></br>words which dont look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card  w-full bg-base-100  shadow-xl p-5">
          <figure className="px-10  pt-10 bg-gray-300">
            <img src={productImg1} alt="Shoes" className="rounded-xl  h-48 w-48 object-cover" />
          </figure>
          <div className="card-body  items-center text-center">
            <div className="icon text-red-600 flex"><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-red-500">Price : $20.00</p>
         
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-xl p-5">
          <figure className="px-10 pt-10 bg-gray-300">
            <img src={productImg2} alt="Shoes" className="rounded-xl  h-48 w-48 object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="icon text-red-600 flex"><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <h2 className="card-title">Car Air Filter</h2>
            <p className="text-red-500">Price : $20.00</p>
         
          </div>
        </div>
        <div className="card bg-base-100 w-full  shadow-xl p-5">
          <figure className="px-10 pt-10 bg-gray-300">
            <img src={productImg3} alt="Shoes" className="rounded-xl  h-48 w-48 " />
          </figure>
          <div className="card-body items-center text-center">
            <div className="icon text-red-600 flex"><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-red-500">Price : $20.00</p>
         
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-xl p-5">
          <figure className="px-10 pt-10 bg-gray-300">
            <img src={productImg4} alt="Shoes" className="rounded-xl  h-48 w-48 object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="icon text-red-600 flex"><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-red-500">Price : $20.00</p>
         
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-xl p-5">
          <figure className="px-10 pt-10 bg-gray-300">
            <img src={productImg5} alt="Shoes" className="rounded-xl  h-48 w-48 object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="icon text-red-600 flex"><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-red-500">Price : $20.00</p>
         
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-xl p-5">
          <figure className="px-10 pt-10 bg-gray-300">
            <img src={productImg6} alt="Shoes" className="rounded-xl  h-48 w-48 object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="icon text-red-600 flex"><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-red-500">Price : $20.00</p>
         
          </div>
        </div>
      </div>
     <div className="flex justify-center">
     <button className="btn btn-outline mt-6 mb-5  btn-secondary">More Services</button>
     </div>
    </div>
  );
};

export default Products;
