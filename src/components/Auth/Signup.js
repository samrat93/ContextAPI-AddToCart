import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CartState } from "../../context/Context";
import "../styles.css";

const Signup = () => {
  const { user, setUser } = CartState();
  const [error, setError] = useState("");

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(user.firstName && user.lastName && user.address && user.email && user.password && user.confPass){
        if(user.password === user.confPass){
            alert("User registered successfully")
            history.push("/profile");
        }else{
            setError("Password and Confirm password not matched!!!")
        }
    }

  };

  const handleReset = (e) => {
    e.preventDefault();
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      password: "",
      confPass: "",
    });
    setError("");
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginForm">
          <h2>User Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="btnWrapper">
              <input
                onChange={handleChange}
                type="text"
                value={user.firstName}
                name="firstName"
                placeholder="Enter your firstname"
                required
              />
              <input
                onChange={handleChange}
                type="text"
                value={user.lastName}
                name="lastName"
                placeholder="Enter your lastname"
                required
              />
            </div>
            <div className="btnWrapper">
              <input
                onChange={handleChange}
                type="email"
                value={user.email}
                name="email"
                placeholder="Enter your email"
                required
              />
              <input
                onChange={handleChange}
                type="text"
                value={user.address}
                name="address"
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="btnWrapper">
              <input
                onChange={handleChange}
                type="password"
                value={user.password}
                name="password"
                placeholder="Enter your password"
                required
              />
              <input
                onChange={handleChange}
                type="password"
                value={user.confPass}
                name="confPass"
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="btnWrapper">
              <button type="submit" className="loginButton">
                Signup
              </button>
              <button onClick={handleReset} className="loginCancel">
                Cancel
              </button>
            </div>
            <div className="msgWrapper">
              <p className="errorMsg">{error}</p>
              <p className="signUpText">
                Already have account?{" "}
                <Link to="/login">
                  <span className="signUpLink">Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
