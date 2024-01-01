"use client";

import Link from "next/link";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { UserSignin } from "../../../../provider/redux/slices/user/userSigninSlice";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  useFormik,
  FormikHelpers,
} from "formik";

import { useEffect, useState } from "react";
import { SigninValidation } from "@/validations/signin-validation";
import { MdRocket } from "react-icons/md";
import { useRouter } from "next/navigation";

interface Values {
  email: string;
  password: string;
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
  const dispatch = useDispatch();
  const router = useRouter();
  const [alert, setAlert] = useState<string | null>(null);

  setTimeout(() => {
    setAlert(null);
  }, 3000);

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      // Dispatch the UserSignin action and await the response
      const response: ApiResponse = await dispatch<any>(UserSignin(values));

      // Extract data from the response payload
      const data = response.payload.data;

      // Set an alert message for 3 seconds
      if (UserSignin.rejected.match(response)) {
        console.log("res", response.payload.message);
        setAlert(`Error: ${response.payload.message}`);
      } else {
        setAlert(data.message);
      }

      console.log("response", data);

      // Store user information in local storage
      localStorage.setItem("USER_ID", data.user._id);
      localStorage.setItem("EMAIL", data.user.email);
      localStorage.setItem("ACCESS_TOKEN", data.token);
      router.push("/dashboard");

      // Check if the response indicates an error
      if (UserSignin.rejected.match(response)) {
        console.log("Rejected action:", response); // Log the entire rejected action
        console.log("Error message:", response.payload?.data?.message);

        // Set an error message in the alert
        setAlert(`Error: ${response.payload?.data?.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      // Set submitting to false to allow the form to be submitted again
      setSubmitting(false);
    }
  };

  // Initialize Formik with the provided initialValues, validation schema, and handleSubmit
  const formik = useFormik({
    initialValues,
    validationSchema: SigninValidation,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <title>Metick Login</title>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white border rounded p-8 shadow-md w-full max-w-md">
          <Link href="/">
            <h1 className="text-pink-600 h2-bold italic text-center md:mb-5">
              me<span className="text-[#0f5e9c]">tick</span>
            </h1>
          </Link>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={SigninValidation}
          >
            <Form>
              <div className="mb-4">
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Username/Email"
                  className={`mt-1 p-2 w-full border rounded-md ${
                    formik.errors.email && formik.touched.email
                      ? "border-green-500"
                      : ""
                  }`}
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-pink-500"
                />
              </div>
              <div className="mb-4">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-pink-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-pink-800 via-pink-500 to-pink-800 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </Form>
          </Formik>
          <p className="text-center mt-3">
            Don't have an account? <Link href="/sign-up">Sign up</Link>
          </p>
          <p className="text-center mt-2 text-sm">
            <Link href="/forgot-password" className="text-blue-500">
              Forgot Password?
            </Link>
          </p>
          {alert && (
            <div className="absolute top-0 left-0 right-0 bg-yellow-200 p-4 text-center">
              <MdRocket className="h-4 w-4 inline-block mr-2" />
              {alert}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
