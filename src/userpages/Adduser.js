import { Box, Button, TextField } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import { useFormik } from "formik";
import "../App.css";
import * as yup from "yup";
import { API } from "./API";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const userValidationSchema = yup.object({
  name: yup.string().required("Please fill the name"),
  email: yup
    .string()
    .min(10, "please enter longer")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "pattern not matched"),
  number: yup
    .number()
    .min(10, "please enter at least 10  number")
    .required("why not fill the number"),
  avatar: yup.string().required("Please enter the profile pic url"),
});

export default function Adduser() {

const navigate=useNavigate()

  const formik = useFormik({
    initialValues: {
      name: "",
      avatar: "",
      email: "",
      number: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (newUser) => {
      adduser(newUser);
    },
  });

  const adduser = (newUser) => {

    fetch(`${API}/users`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => navigate("/users"));
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Create User" subtitle="Enter data to create new user" />
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          padding: "10px",
          background: colors.primary[400]
        }}
        
      >
        <form className="add-user-form" onSubmit={formik.handleSubmit}>
          <TextField
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="User Name"
            variant="standard"
          />
          {formik.touched.name && formik.errors.name ? formik.errors.name : ""}

          <TextField
            id="avatar"
            name="avatar"
            label="User Profile"
            variant="standard"
            value={formik.values.avatar}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.avatar && formik.errors.avatar
            ? formik.errors.avatar
            : ""}
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="standard"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
          />
          {formik.touched.email && formik.errors.email
            ? formik.errors.email
            : ""}
          <TextField
            id="number"
            name="number"
            label="Phone Number"
            variant="standard"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.number && formik.errors.number
            ? formik.errors.number
            : ""}
          <Button variant="contained" type="submit">Add User</Button>
        </form>
      </Box>
    </Box>
  );
}
