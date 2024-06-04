
// components/UserForm.js
 "use client"
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { generateotp,verifyotp, postUser } from '../redux/features/jobs/usersSlice';

 
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  mobileno: Yup.string()
    .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  address: Yup.string().required('Address is required'),
  description: Yup.string().required('Description is required'),
});
 
const sendOTP = async (email) => {

  // Simulate sending OTP
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  // console.log(`OTP sent to ${email}: ${otp}`);
  return otp;
};
 
const UserForm = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { verifyOtp,generateOtp } = useSelector((state: RootState) => state.usersReducers);

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userFormData,setUserFormData] = useState(null)

 
  const formik = useFormik({
    initialValues: {
      name: '',
      mobileno: '',
      email: '',
      address: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(generateotp({email:values.email,mobileno:values.mobileno}));
      setUserFormData(values)
      // const generatedOtp = await sendOTP(values.email);
      // setOtp(generatedOtp);
      // console.log(generateOtp)
      if(!generateOtp.isUser)
      {
        // console.log(generateOtp)
        setOtpSent(true);
      }

    },
  });
 
  const handleOtpSubmit = () => {
    dispatch(verifyotp({email:userFormData.email,otp:otpInput,mobileno:userFormData.mobileno})).then((res: any) => {


      // console.log(res,"jdsadjf")
      if (res.payload.data.message === "OTP Verified") {
        // console.log("oiiii")
        let tempObj =userFormData
        tempObj.otp = otpInput
        dispatch(verifyotp(tempObj))
        setFormSubmitted(true);
        setOtpSent(false);
      }
     })

 
    

   
  
    
  };
 
  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {verifyOtp?.message && verifyOtp.message === "OTP Verified" ? (
        <Typography >Your form was submitted successfully. We will contact you soon.</Typography>
      ) : generateOtp&& generateOtp.message ==="OTP sent" ? (
        <>
         <Typography style={{textAlign:"center"}}> OTP sent to {formik.values.email}</Typography>
          <TextField
            fullWidth
            id="otp"
            name="otp"
            label="Enter OTP"
            value={otpInput}
            onChange={(e) => setOtpInput(e.target.value)}
          />
          <Button style={{ color: "#fff", backgroundColor: "#ff6347", marginBottom: "10px" }}  variant="contained" onClick={handleOtpSubmit}>
            Verify OTP
          </Button>
          {verifyOtp&& verifyOtp.message == "OTP Not Verified" ?   <Typography style={{textAlign:"center"}}> OTP Was Wrong </Typography>:<></>}

        </>
      ) : (
        <>
          {['name', 'mobileno', 'email', 'address', 'description'].map((field) => (
            <TextField
              key={field}
              // fullWidth
              multiline={field === 'address' || field === 'description'}
              minRows={field === 'address' || field === 'description' ? 4 : undefined}
              id={field}
              name={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formik.values[field]}
              onChange={formik.handleChange}
              error={formik.touched[field] && Boolean(formik.errors[field])}
              helperText={formik.touched[field] && formik.errors[field]}
            />
          ))}
          <Button style={{ color: "#fff", backgroundColor: "#ff6347", marginBottom: "10px" }}   variant="contained" type="submit">
            Submit
          </Button>
          {generateOtp&& generateOtp.message == "User Existed" ?   <Typography style={{textAlign:"center"}}> USER Already Existed </Typography>:<></>}

          
        </>
      )}
    </Box>
  );
};
 
export default UserForm;