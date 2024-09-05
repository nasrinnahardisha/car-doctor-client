import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, service_id, title, img, price, description, facility } = service;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10 w-96 h-60 object-cover">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Price : ${price}</p>
        <div className="card-actions">
          <Link to={`/checkOuts/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
