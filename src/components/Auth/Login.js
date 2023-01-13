import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CartState } from "../../context/Context";
import "../styles.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const Login = () => {
  const { userData, setUserData,showPassword,setShowpassword } = CartState();
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
      setUserData({ ...userData, userLogin: true });
      history.push("/profile");
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
      userLogin: false,
    });
    setError("");
  };

  const handleIconVisible = () => {
    setShowpassword(!showPassword);
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
            <div className="textboxWithIcon">
              {showPassword ? (
                <VisibilityIcon
                  onClick={handleIconVisible}
                  className="iconVisible"
                />
              ) : (
                <VisibilityOffIcon
                  className="iconVisible"
                  onClick={handleIconVisible}
                />
              )}

              <input
                onChange={handleChange}
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                value={userData.password}
                placeholder="Password"
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
                Don't have account?{" "}
                <Link to="/signup">
                  <span className="signUpLink">Signup</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
