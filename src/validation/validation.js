import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "Too Short!")
    .max(12, "Too Long!")
    .required("First name required"),
  lastName: Yup.string()
    .min(1, "Too Short!")
    .max(12, "Too Long!")
    .required("Last name required"),
  address: Yup.string().required("Address is required"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6 character long.")
    .required("Password is required"),
  confPass: Yup.string()
    .required("Confirm password is required")
    .oneOf(
      [Yup.ref("password"), null],
      "Password & Confirm password doesn't match"
    ),
});
