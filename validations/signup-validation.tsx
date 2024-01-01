import React from "react";
import * as Yup from "yup";

export const SingupValidation = Yup.object().shape({
  full_name: Yup.string().required("Full Name is required"),
  user_name: Yup.string().required("User Name is required"),
  country_code: Yup.string().required(" is required"),
  phone_number: Yup.string().required("Phone number is required"),

  email: Yup.string()
    // .email("Enter valid email address")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
