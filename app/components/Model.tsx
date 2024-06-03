"use client"
import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Button,
  Typography,
  Box
} from '@mui/material';
import { useDispatch } from 'react-redux';
import {  getUsers, postUser } from '../redux/features/jobs/usersSlice';
import { AppDispatch } from '../redux/store';


export const EditUsersModal = (props: any) => {
  const { open, updateData, updateCostCenter } = props;
  let [code, setCode] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  let [description, setDescription] = useState<string>('');
  let [name, setName] = useState<string>('');
console.log(props.data)
  const handleClose = () => {
    setCode('');
    props.setisOpen(false)

    // dispatch(modelOpen(false));
  };
  const handleSaveDisputeReason = () => {

    let tempObj:any = 

        {
            "trackerId": props.data.trackerId,
            "isotpVerfied": props.data.isotpVerfied,
            "otp":props.data.otp,
            "mobileno": props.data.mobileno,
            "response": code,
            "address": props.data.address,
            "email": props.data.email,
            "description": props.data.description,
            "name": props.data.name
        
    }
    handleClose()
    dispatch(postUser(tempObj));
    dispatch(getUsers({}));
   console.log(tempObj,"codecodecode")
    

  };

  return (
    <Dialog
      open={props.isOpen}
      onClose={handleClose}
      PaperProps={{ sx: { p: 3 } }}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid rgba(0, 0, 0, 0.12)"
        >
          <Typography variant="h6">Respond </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container direction={'column'}>
          <Grid item>
            <TextField
              required
              multiline
              label="Respond"
              id="outlined-error-helper-text"
              onChange={(e) => setCode(e.target.value)}
              fullWidth
              margin="normal"
              defaultValue={props.data?.response}
            />
          </Grid>
         
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          style={{ marginRight: 10 }}
          onClick={handleClose}
          color="primary"
          variant="contained"
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveDisputeReason}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};