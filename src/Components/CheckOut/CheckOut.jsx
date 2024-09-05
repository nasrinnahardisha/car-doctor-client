import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { img, title, _id, Service_id, price } = service;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const amount = form.amount.value;
    const email = user?.email;
    const checkOut = {
      customerName: name,
      img,
      email,
      date,
      title,
      service: Service_id,
      id: _id,
      price,
      amount,
    };
    // console.log(checkOut);

    fetch("https://car-doctor-server-with-jwt-three.vercel.app/checkOuts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(checkOut),
    })
      .then((res) => res.json())
      .then(() => {
        // console.log(data);
        navigate("/checkOuts")
      });
  };

  return (
    <div className="mt-10 mb-10">
      <form onSubmit={handleCheckOut}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <input
              type="text"
              name="amount"
              defaultValue={"$" + price}
              placeholder="Your Phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Order Confirm"
            className="btn bg-orange-400 btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
