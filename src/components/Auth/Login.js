import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CartState } from "../../context/Context";
import "../styles.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useFormik, FormikProvider } from "formik";
import { LoginSchema } from "../../validation/validation";

const Login = () => {
  const { userData, setUserData, showPassword, setShowpassword } = CartState();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      if (values.userName === "samrat" && values.password === "samrat123") {
        setUserData({ ...userData, userLogin: true });
        history.push("/profile");
        alert("Login successfully.");
      } else if (
        values.userName === "samrat" ||
        values.password === "samrat123"
      ) {
        alert("Username or Password not matched !!!");
      }
    },
  });
  const { errors, touched, resetForm, handleSubmit, getFieldProps } = formik;

  // console.log("=================> ", getFieldProps("userName"))

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({
  //     ...userData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (userData.userName === "samrat" && userData.password === "samrat123") {
  //     setUserData({ ...userData, userLogin: true });
  //     history.push("/profile");
  //     alert("Login successfully.");
  //   } else {
  //     setError("Username or Password not matched !!!");
  //   }
  // };

  // const handleReset = (e) => {
  //   e.preventDefault();
  //   setUserData({
  //     userName: "",
  //     password: "",
  //     userLogin: false,
  //   });
  // };

  const handleIconVisible = () => {
    setShowpassword(!showPassword);
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginForm">
          <h2>User Login</h2>
          <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
              <input
                // onChange={handleChange}
                type="text"
                value={userData.userName}
                name="userName"
                placeholder="Username"
                {...getFieldProps("userName")}
                error={Boolean(touched.userName && errors.userName)}
              />
              <p className="errorMsg">{touched.userName && errors.userName}</p>
              <div className="textboxWithIcon">
                {showPassword ? (
                  <VisibilityIcon
                    onClick={handleIconVisible}
                    className="iconVisible"
                    color="error"
                  />
                ) : (
                  <VisibilityOffIcon
                    className="iconVisible"
                    onClick={handleIconVisible}
                  />
                )}

                <input
                  // onChange={handleChange}
                  type={`${showPassword ? "text" : "password"}`}
                  name="password"
                  value={userData.password}
                  placeholder="Password"
                  {...getFieldProps("password")}
                  error={Boolean(touched.password && errors.password)}
                />
              </div>
              <p className="errorMsg">{touched.password && errors.password}</p>
              <div className="btnWrapper">
                <button type="submit" className="loginButton">
                  Login
                </button>
                <button
                  type="reset"
                  onClick={resetForm}
                  className="loginCancel"
                >
                  Reset
                </button>
              </div>
              <div className="msgWrapper">
                <p className="signUpText">
                  Don't have account?{" "}
                  <Link to="/signup">
                    <span className="signUpLink">Signup</span>
                  </Link>
                </p>
              </div>
            </form>
          </FormikProvider>
        </div>
      </div>
    </>
  );
};
export default Login;
