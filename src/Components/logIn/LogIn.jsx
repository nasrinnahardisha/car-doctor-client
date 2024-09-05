import { Link, useNavigate } from "react-router-dom";
import logImg from "../../assets/images/login/login.svg";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import useAuth from "../Hooks/useAuth";

const LogIn = () => {
  const {signIn} = useAuth();
  // const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const user = {email, password}
    // console.log(user);

    signIn(email, password)
      .then(() => {
        // const loggedInUser = result.user;
        // console.log(loggedInUser);
        const user = { email };

        // get access token
        axios.post("https://car-doctor-server-with-jwt-three.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            // console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content  flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={logImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
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
              <input type="submit" className="btn btn-primary" value="LogIn" />
            </div>
            <p>
              New to Car Doctors{" "}
              <Link className="text-orange-500 font bold" to="/signUp">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
