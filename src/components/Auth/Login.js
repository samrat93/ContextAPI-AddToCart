import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../styles.css";

const Login = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
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
    if (userData.userName === "samrat" && userData.password === "samrat123") {
      history.push("/");
      alert("Login successfully.");
    } else {
      setError("Username or Password not matched !!!");
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUserData({
      userName: "",
      password: "",
    });
    setError("");
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginForm">
          <h2>User Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              value={userData.userName}
              name="userName"
              placeholder="Username"
              required
            />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={userData.password}
              placeholder="Password"
              required
            />
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
                Don't have account? <Link to="/signup"> <span className="signUpLink">Signup</span></Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
