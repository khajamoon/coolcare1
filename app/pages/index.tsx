/* app/pages/index.tsx */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import styles from '../Home.module.css';
import Features from '../components/Features';
// import ReactForm from '../components/Form';
import UserForm from '../components/Form';
import { Container, Input, Typography } from '@mui/material';
import Carousel from '../components/Carousel';
import CarouselComponent from '../components/Carousel';
import TrackerIdForm from '../components/TrackerIdForm';

const HomePage: React.FC = () => {

  const items = [
    {
      id: 4,
      title: 'Image 4',
      position: "center",
      imageUrl: '/collageservices.jpeg',
    },
    {
      id: 2,
      title: 'Image 2',
      position: "center",
      imageUrl: '/fridge1.jpeg',
    },
    {
      id: 1,
      title: 'Image 1',
      position: "top",
      imageUrl: '/accarsole.jpeg',
    },

    {
      id: 3,
      title: 'Image 3',
      position: "center",
      imageUrl: '/washingmachine.jpeg',
    },
   
  ];
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.hero}>
          <div>
            <h1 style={{ color: "white" }}>Home Services at Your Doorstep</h1>
            <p style={{ color: "white" }}>Professional services for AC repair, washing machine repair, and refrigerator repair.</p>
          </div>
          <img src="/allrepair.jpeg" alt="Home Services" />
        </div>
        <TrackerIdForm/>
        <Features></Features>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className={styles.serviceGrid} >
            <ServiceCard title="AC Repair" image="/project1.jpeg" link="/ac-repair" />
            <ServiceCard title="Washing Machine Repair" image="/washingmachine1.jpeg" link="/washing-machine-repair" />
            <ServiceCard title="Refrigerator Repair" image="/refregetator.jpeg" link="/refrigerator-repair" />
            <ServiceCard title="Micro Oven Repair" image="/microoven.jpeg" link="/refrigerator-repair" />

          </div>
        </div>
        <div>
          <CarouselComponent items={items} />
        </div>

        <h2 style={{ textAlign: "center" }}>We Are Expert in </h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className={styles.serviceGrid} >
            <ServiceCard title="All Types Of AC Repairs (split/window)" image="/acrepair1.png" link="/ac-repair" />
            <ServiceCard title="All Types Of Micro Oven Repairs" image="/microoven1.jpeg" link="/washing-machine-repair" />
            <ServiceCard title="All Types Of Refrigerator Repairs" image="/refregetator1.jpeg" link="/refrigerator-repair" />
            <ServiceCard title="All Types Of Washing Machine Repairs" image="/washingmachine1.jpeg" link="/refrigerator-repair" />

          </div>
        </div>

      </div>


      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign={"center"}>
          Contact Us
        </Typography>
        <UserForm></UserForm>
      </Container>


      <Footer />
    </div>
  );
};

export default HomePage;
