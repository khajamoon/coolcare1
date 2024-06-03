"use client"
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { adminLogin, adminLogout } from '../redux/features/jobs/usersSlice';






const MenuItem = styled.li`
  cursor: pointer;
`;

const Header: React.FC = () => {

  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>();

  const { isLogin, admin } = useSelector((state: RootState) => state.usersReducers);

  const handlelogout = () => {


  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", backgroundColor: "#fff;", width:"100%",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>

      <div className='logo' >Cool Care</div>
      <div style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <MenuItem onClick={() => router.push('/')}>Home</MenuItem>
        {/* <MenuItem  onClick={() => router.push('/ac-repair')}>About</MenuItem> */}
        <MenuItem onClick={() => router.push('/services')}>Services</MenuItem>
        <MenuItem onClick={() => router.push('/admin')}>Admin</MenuItem>

        {admin && admin.isAdmin ? <MenuItem onClick={() => {
          router.push('/admin');
          dispatch(adminLogout({ message:"user wants login" }))
        }}>LogOut</MenuItem> :
          <MenuItem onClick={() => router.push('/contact')}>Contact</MenuItem>
        }
      </div>
    </div>
  );
};

export default Header;


