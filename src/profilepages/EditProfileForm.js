import { Box, Button, TextField } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import { useFormik } from "formik";
import "../App.css";
import * as yup from "yup";
import {  profile_API } from "./API";
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
    .required("why not fill the number"),
  avatar: yup.string().required("Please enter the profile pic url"),
});

export  function EditProfileForm({profile}) {

const navigate=useNavigate()

  const formik = useFormik({
    initialValues: {
      name: profile.name,
      avatar: profile.avatar,
      email: profile.email,
      number: profile.number,
      age:profile.age,
      designation:profile.designation,
      address:profile.address,
      city:profile.city,
      state:profile.state,
      country:profile.country
    },
    validationSchema: userValidationSchema,
    onSubmit: (editProfile) => {
      console.log("onSubmit", editProfile);
      editprofile(editProfile);
    },
  });

  const editprofile = (editProfile) => {
    console.log(editProfile);
    fetch(`${profile_API}/profile/1`, {
      method: "PUT",
      body: JSON.stringify(editProfile),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => navigate("/profile"));
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Edit Profile" subtitle="Edit admin data" />
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
            label=" Name"
            variant="standard"
          />
          {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
          <TextField
            id="designation"
            name="designation"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label=" Designation"
            variant="standard"
          />
          {formik.touched.designation && formik.errors.designation ? formik.errors.designation : ""}
          <TextField
            id="avatar"
            name="avatar"
            label=" Profile"
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
 <TextField
            id="age"
            name="age"
            label="Age"
            variant="standard"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.age && formik.errors.age
            ? formik.errors.age
            : ""}
            <TextField
            id="address"
            name="age"
            label="Address"
            variant="standard"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address
            ? formik.errors.address
            : ""}
<div>
<TextField
            id="city"
            name="city"
            label="City"
            variant="standard"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
         
            <TextField
            id="state"
            name="state"
            label="State"
            variant="standard"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
       
            <TextField
            id="country"
            name="country"
            label="Country"
            variant="standard"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
       
</div>

          <Button variant="contained" type="submit">Save Profile</Button>
        </form>
      </Box>
    </Box>
  );
}
