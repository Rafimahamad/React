import * as Yup from "yup";

export const validateForm = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short! ")
    .max(50, "Too Long!")
    .matches( /[A-Za-z]/, "Enter valid name") 
    .required("First Name is required"),

  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches( /[A-Za-z]/, "Enter valid name") 
    .required("Last Name is required"),

  phone: Yup.string()
    .required("Phone number is required")
    .max(10,'number should be 10 digits only')
    .matches(
     /[6-9]{1}[0-9]{9}/,
      "Invalid phone number"
    ) 
    ,

  email: Yup.string().email().matches(/[a-z0-9+_.-]+@+[a-z]+.com+$/,'invalid email Id').required("Email is required"),
  gender: Yup.string().required("gender is required"),
  location: Yup.string().required('location is required'),


  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum")
    ,
    confirmPassword: Yup.string()
    .required("Password is required").oneOf([Yup.ref('password'),null],'password must match')
});