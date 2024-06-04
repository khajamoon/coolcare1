"use client"

import { Button, Typography } from '@mui/material'
import MrtTableComp from '../../components/MrtTableComponent'

import Header from '../../components/Header'
import { useRouter } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { adminLogin,getUsers } from '../../redux/features/jobs/usersSlice';

export default function App() {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>();
  const { admin,users } = useSelector((state: RootState) => state.usersReducers);

  const [isrefresh, setRefresh] = useState(false)
  const [isOpen, setisOpen] = useState(false)

  useEffect(()=>{

    const email = sessionStorage.getItem('email');
    const password = sessionStorage.getItem('password');

    dispatch(getUsers({}))
  },[])



  const handleRefresh = () => {
    setRefresh(!isrefresh)
  }


  



  const routeToLogin = () => {

    return (

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          <Header></Header>
        <Button>You are Not sign-in   </Button>
        <Button onClick={() => router.push('/admin')}>Click to go Sign-In  </Button>
      </div>
    )
  }


  return (

    admin && admin.isAdmin ? <>
      <Header></Header>
      <MrtTableComp
        // columnsHeaders={
        //   [
        //   {
        //     accessorKey: 'email',
        //     header: 'Email',

        //   },
        //   {
        //     accessorKey: 'mobileno',
        //     header: 'Mobile No',

        //   },
        //   {
        //     accessorKey: 'address',
        //     header: 'Adress',
 
        //   },
        //   {
        //     accessorKey: 'description',
        //     header: 'Discription',

        //   },
        //   {
        //     accessorKey: 'trackerId',
        //     header: 'Tracker ID ',
  
        //   },
        //   {
        //     accessorKey: 'respond',
        //     header: 'Respond',
        //     enableEditing: true,
        //     muiEditTextFieldProps: {
        //       type: 'email',
        //       required: true,
        //     }
        //   }

        // ]}
        columndata={users?.data} 
      ></MrtTableComp></>
      : routeToLogin()

  )
}
