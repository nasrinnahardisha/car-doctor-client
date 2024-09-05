import { Link, useNavigate } from "react-router-dom";
import logImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
 

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    createUser(email, password)
      .then(() => {
        // const user = result.user;
        // console.log(user);
      })
      .then((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content  flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={logImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl font-bold">SignUp</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary  text-xl"
                value="SignUp"
              />
            </div>
            <p>
              Already have an account ?
              <Link className="text-orange-500 font bold" to="/logIn">
                LogIn
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
