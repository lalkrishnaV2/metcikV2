import React from "react";
import * as Yup from "yup";

export const SigninValidation = Yup.object().shape({
  email: Yup.string()
    // .email("Enter valid email address")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
