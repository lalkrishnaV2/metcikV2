"use client";

import { SignupUser } from "@/provider/redux/slices/user/userSignupSlice";
import { SingupValidation } from "@/validations/signup-validation";
import { Formik, Form, useFormik, FormikHelpers } from "formik";
import { init } from "next/dist/compiled/webpack/webpack";
import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { MdRocket } from "react-icons/md";
import { useRouter } from "next/navigation";

interface Values {
  full_name: string;
  user_name: string;
  email: string;
  password: string;
  phone_number: string;
  country_code: string;
  confirm_password: string;
}

interface ApiResponse {
  ok: boolean;
  status: number;
  statusText: string;
  payload: {
    message: string;
    data: {
      token: string;
      message: string;
      // Add other properties if necessary
      user: {
        _id: string;
        email: string;
      };
    };
    // Add other properties if necessary
  };
}

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState<string | null>(null);
  const [alertColor, setAlertColor] = useState<string | null>(null); // State to store alert color

  setTimeout(() => {
    setAlertColor(null);
    setAlert(null);
  }, 6000);

  const initialValues = {
    full_name: "",
    user_name: "",
    email: "",
    password: "",
    confirm_password: "", // Added confirmPassword field
    phone_number: "",
    country_code: "",
  };

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      console.error(" submitting :", values);

      const response: ApiResponse = await dispatch<any>(SignupUser(values));

      const data = response.payload.data;
      console.log("data", data);
      if (SignupUser.rejected.match(response)) {
        console.log("res", response.payload.message);
        setAlertColor("bg-red-200"); // Set background color for error
        setAlert(`Error: ${response.payload.message}`);
      } else {
        setAlertColor("bg-yellow-200"); // Set background color for success
        setAlert(data.message);
      }
      console.log("response", data);
      router.push("/sign-in");
      console.log("Form submitted successfully:", response);
      // Handle success, e.g., redirect the user to a new page
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, e.g., display an error message to the user
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: SingupValidation,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <title>Metick Sign Up</title>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white border rounded p-8 shadow-md w-full max-w-md">
          <Link href="/">
            <h1 className="text-pink-600 h2-bold italic text-center md:mb-5">
              me<span className="text-[#0f5e9c]">tick</span>
            </h1>
          </Link>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="full_name"
                name="full_name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Full name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.full_name}
              />
              {formik.touched.full_name && formik.errors.full_name ? (
                <div className="text-pink-500  text-sm">
                  {formik.errors.full_name}
                </div>
              ) : null}
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.user_name}
              />
              {formik.touched.user_name && formik.errors.user_name ? (
                <div className="text-pink-500  text-sm">
                  {formik.errors.user_name}
                </div>
              ) : null}
            </div>
            <div className="mb-4 flex">
              <div>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={formik.values.country_code}
                  onChange={(value) =>
                    formik.setFieldValue("country_code", value)
                  }
                  className="mt-1 p-2 w-28 border rounded-md"
                  onBlur={formik.handleBlur}
                  placeholder="country"
                />
                {formik.touched.country_code && formik.errors.country_code ? (
                  <div className="text-pink-500  text-sm">
                    {formik.errors.country_code}
                  </div>
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Phone number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone_number}
                />
                {formik.touched.phone_number && formik.errors.phone_number ? (
                  <div className="text-pink-500  text-sm">
                    {formik.errors.phone_number}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-pink-500  text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-pink-500  text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Confirm password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirm_password}
              />
              {formik.touched.confirm_password &&
              formik.errors.confirm_password ? (
                <div className="text-pink-500  text-sm">
                  {formik.errors.confirm_password}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-pink-800 via-pink-500 to-pink-800 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
            <p className="text-center p-3">
              {" "}
              do you already have an account?<a href="/sign-in"> login</a>
            </p>
            {alert && (
              <div
                className={`absolute top-0 left-0 right-0 p-4 text-center ${alertColor}`}
              >
                <MdRocket className="h-4 w-4 inline-block mr-2" />
                {alert}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
