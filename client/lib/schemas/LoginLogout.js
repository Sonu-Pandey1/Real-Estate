import * as yup from "yup";

const passwordRules = new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$");


const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(passwordRules, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    })
    .required("Password is required"),
});

const signupSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Username must be at least 2 characters")
    .max(30, "Username cannot be longer than 30 characters")
    .required("Username is required"),

  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(passwordRules, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    })
    .required("Password is required"),
 CPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
    

      terms: yup.boolean()
          .oneOf([true], "You must accept the terms and conditions")
          .required("Required"),
});

export { loginSchema, signupSchema };
