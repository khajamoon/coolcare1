"use client"
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { adminLogin } from '../redux/features/jobs/usersSlice';
import Header from '../components/Header'


const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const UserLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLogin, admin } = useSelector((state: RootState) => state.usersReducers);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      dispatch(adminLogin({ email: values.email, password: values.password }))

      // if (admin.isAdmin) {

      // router.push('/admin/dashboard');


      // }
    },
  });
  const routeToDashboard = () => {


    return (

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

        <Button>You are  sign-in   </Button>
        <Button onClick={() => router.push('/admin/dashboard')}>Click to go dashboard  </Button>
      </div>
    )
  }

  return (


    <>
      <Header></Header>

      {admin && admin.isAdmin ? routeToDashboard() :

        <Box sx={{ width: 300, mx: 'auto', mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>Admin Login</Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              margin="normal"
            />
            {admin && !admin.isAdmin ? <Typography>Check Your credentials</Typography> : <></>}
            <Button style={{ color: "#fff", backgroundColor: "#ff6347", marginBottom: "10px" }} variant="contained" type="submit">
              Login
            </Button>
          </form>
        </Box>}
    </>

  );
};

export default UserLogin;