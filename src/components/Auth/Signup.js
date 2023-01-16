import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CartState } from "../../context/Context";
import "../styles.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useFormik, FormikProvider } from "formik";
import { RegisterSchema } from "../../validation/validation";

const Signup = () => {
  const {
    user,
    showPassword,
    setShowpassword,
    showConfPassword,
    setShowConfPassword,
  } = CartState();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      password: "",
      confPass: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      if (
        values.firstName &&
        values.lastName &&
        values.address &&
        values.email &&
        values.password &&
        values.confPass
      ) {
        if (values.password === values.confPass) {
          alert("User registered successfully");
          history.push("/profile");
        }
      }
    },
  });
  const { errors, touched, handleSubmit, getFieldProps, resetForm } = formik;

  const handlePasswordVisible = () => {
    setShowpassword(!showPassword);
  };

  const handleConfPasswordVisible = () => {
    setShowConfPassword(!showConfPassword);
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginForm">
          <h2>User Registration</h2>
          <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
              <div className="btnWrapper">
                <div className="inputWithErrorMsg">
                  <input
                    type="text"
                    value={user.firstName}
                    name="firstName"
                    placeholder="Enter your firstname"
                    {...getFieldProps("firstName")}
                    error={Boolean(touched.firstName && errors.firstName)}
                  />
                  <p className="errorMsg">
                    {touched.firstName && errors.firstName}
                  </p>
                </div>
                <div className="inputWithErrorMsg">
                  <input
                    type="text"
                    value={user.lastName}
                    name="lastName"
                    placeholder="Enter your lastname"
                    {...getFieldProps("lastName")}
                    error={Boolean(touched.lastName && errors.lastName)}
                  />
                  <p className="errorMsg">
                    {touched.lastName && errors.lastName}
                  </p>
                </div>
              </div>
              <div className="btnWrapper">
                <div className="inputWithErrorMsg">
                  <input
                    type="email"
                    value={user.email}
                    name="email"
                    placeholder="Enter your email"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                  />
                  <p className="errorMsg">{touched.email && errors.email}</p>
                </div>
                <div className="inputWithErrorMsg">
                  <input
                    type="text"
                    value={user.address}
                    name="address"
                    placeholder="Enter your address"
                    {...getFieldProps("address")}
                    error={Boolean(touched.address && errors.address)}
                  />
                  <p className="errorMsg">
                    {touched.address && errors.address}
                  </p>
                </div>
              </div>
              {/* <div className="btnWrapper"> */}
              <div className="textboxWithIconInSignup">
                {showPassword ? (
                  <VisibilityIcon
                    onClick={handlePasswordVisible}
                    className="iconVisible"
                    color="error"
                  />
                ) : (
                  <VisibilityOffIcon
                    className="iconVisible"
                    onClick={handlePasswordVisible}
                  />
                )}
                <div className="inputWithErrorMsg">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    value={user.password}
                    placeholder="Password"
                    {...getFieldProps("password")}
                    error={Boolean(touched.password && errors.password)}
                  />
                  <p className="errorMsg">
                    {touched.password && errors.password}
                  </p>
                </div>
              </div>
              <div className="textboxWithIconInSignup">
                {showConfPassword ? (
                  <VisibilityIcon
                    onClick={handleConfPasswordVisible}
                    className="iconVisible"
                    color="error"
                  />
                ) : (
                  <VisibilityOffIcon
                    className="iconVisible"
                    onClick={handleConfPasswordVisible}
                  />
                )}
                <div className="inputWithErrorMsg">
                  <input
                    type={`${showConfPassword ? "text" : "password"}`}
                    name="confPass"
                    value={user.confPass}
                    placeholder="Confirm password"
                    {...getFieldProps("confPass")}
                    error={Boolean(touched.confPass && errors.confPass)}
                  />
                  <p className="errorMsg">
                    {touched.confPass && errors.confPass}
                  </p>
                </div>
              </div>
              {/* <input
                onChange={handleChange}
                type="password"
                value={user.password}
                name="password"
                placeholder="Enter your password"
                required
              /> */}
              {/* <input
                onChange={handleChange}
                type="password"
                value={user.confPass}
                name="confPass"
                placeholder="Confirm your password"
                required
              /> */}
              {/* </div> */}
              <div className="btnWrapper">
                <button type="submit" className="loginButton">
                  Signup
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
                {/* <p className="errorMsg">{error}</p> */}
                <p className="signUpText">
                  Already have account?{" "}
                  <Link to="/login">
                    <span className="signUpLink">Login</span>
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
export default Signup;
