/* app/pages/contact.tsx */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserForm from '../components/Form';
import { Container, Typography } from '@mui/material';
 
const Contact: React.FC = () => {
  return (
    <div >
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign={"center"}>
          Contact Us
        </Typography>
        <UserForm></UserForm>
      </Container>
    </div>
  );
};
 
export default Contact;