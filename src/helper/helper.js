import { useHistory } from "react-router-dom";
import { CartState } from "../context/Context";

export const UsernameAndPasswordCheck = (values) => {
  const { userData, setUserData } = CartState();
  const history = useHistory();

  if (values.userName === "samrat" && values.password === "samrat123") {
    setUserData({ ...userData, userLogin: true });
    history.push("/profile");
    return alert("Login successfully.");
  } else if (values.userName === "samrat" || values.password === "samrat123") {
    return alert("Username or Password not matched !!!");
  }
};
