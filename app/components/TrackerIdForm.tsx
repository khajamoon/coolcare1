"use client"
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { searchtrackerid } from '../redux/features/jobs/usersSlice';




const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobileno: Yup.string().required('Mobile is required'), 
    trackerId:Yup.string().required('Tracker ID  is required'),
});

const TrackerIdForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage ,setErrormessage] =useState(false)
    const { isLogin, admin,searchtrackerId } = useSelector((state: RootState) => state.usersReducers);
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            mobileno: '',
            trackerId:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(searchtrackerid(values)).then((res:any)=>{
                if(res.payload?.data.message === 'Response sent')
                {
                    setFormSubmitted(true)  
                    setErrormessage(true)  
                    formik.resetForm({
                        values: {
                            email: '',
                            mobileno: '',
                            trackerId: ''
                        }
                    });
                }
                else
                {
                    setErrormessage(true)  
                }

            });
       


        },
    });
    const routeToDashboard = () => {


        return (

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <Button onClick={() =>{ setFormSubmitted(false); setErrormessage(false)}}>Click to  Search another TrackerID  </Button>
            </div>
        )
    }

    return (

       formSubmitted && formSubmitted ? routeToDashboard() :

           <Box sx={{ width: 300, mx: 'auto', mt: 8, textAlign: 'center' }}>
               <Typography variant="h4" gutterBottom>Search TrackerId </Typography>
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
                       id="mobileno"
                       name="mobileno"
                       label="Mobile No"
                       type="mobileno"
                       value={formik.values.mobileno}
                       onChange={formik.handleChange}
                       error={formik.touched.mobileno && Boolean(formik.errors.mobileno)}
                       helperText={formik.touched.mobileno && formik.errors.mobileno}
                       margin="normal"
                   />
                   <TextField
                       fullWidth
                       id="trackerId"
                       name="trackerId"
                       label="trackerId"
                       type="trackerId"
                       value={formik.values.trackerId}
                       onChange={formik.handleChange}
                       error={formik.touched.trackerId && Boolean(formik.errors.trackerId)}
                       helperText={formik.touched.trackerId && formik.errors.trackerId}
                       margin="normal"
                   />
                   {errorMessage&& errorMessage  ?   <Typography style={{textAlign:"center"}}> trackerID Not Existed </Typography>:<></>}

                   <Button style={{ color: "#fff", backgroundColor: "#ff6347", marginBottom: "10px" }} variant="contained" type="submit">
                       Track your responce
                   </Button>
               </form>
           </Box>


    );
};

export default TrackerIdForm;