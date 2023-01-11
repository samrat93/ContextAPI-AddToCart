import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../styles.css";

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    address:"",
    password:"",
    confPass:"",
  });
  const [error, setError] = useState("");
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (userData.userName === "samrat" && userData.password === "samrat123") {
    //   history.push("/");
    //   alert("Login successfully.");
    // } else {
    //   setError("Username or Password not matched !!!");
    // }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUserData({
        firstName: "",
        lastName: "",
        email:"",
        address:"",
        password:"",
        confPass:"",
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
              value={userData.firstName}
              name="firstName"
              placeholder="Enter your firstname"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              value={userData.lastName}
              name="lastName"
              placeholder="Enter your lastname"
              required
            />
            </div>
            <div className="btnWrapper">
            <input
              onChange={handleChange}
              type="email"
              value={userData.email}
              name="email"
              placeholder="Enter your email"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              value={userData.address}
              name="address"
              placeholder="Enter your address"
              required
            />
            </div>
            <div className="btnWrapper">
            <input
              onChange={handleChange}
              type="password"
              value={userData.password}
              name="password"
              placeholder="Enter your password"
              required
            />
            <input
              onChange={handleChange}
              type="password"
              value={userData.confPass}
              name="confPass"
              placeholder="Confirm your password"
              required
            />
            </div>
            <div className="btnWrapper">
              <button type="submit" className="loginButton">
                Login
              </button>
              <button onClick={handleReset} className="loginCancel">
                Cancel
              </button>
            </div>
            <div className="msgWrapper">
              <p className="errorMsg">{error}</p>
              <p className="signUpText">
                Already have account? <Link to="/login"> <span className="signUpLink">Login</span></Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
