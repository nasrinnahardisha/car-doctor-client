// import { useEffect } from "react";
// import { useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "./useServices";

const Services = () => {

//DRY == do not report Yourself
  const services = useServices();
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("https://car-doctor-server-with-jwt-three.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <div className="mt-4">
      <div className="text-center space-y-3">
        <h3 className="text-2xl text-red-500">Services</h3>
        <h2 className="text-5xl font-bold">Our Services Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour,<br></br> or randomised words which dont look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="btn btn-outline mt-6 mb-5  btn-secondary">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
