/* app/pages/ac-repair.tsx */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const ACRepair: React.FC = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
        <h1>AC Repair Services</h1>
        <p>Professional AC repair services at your doorstep. Contact us for efficient and reliable services.</p>
      </div>

      <div style={{ padding: '20px' }}>
        <h1>Refrigerator Repair Services</h1>
        <p>Our expert technicians provide top-notch refrigerator repair services. We handle all brands and models to ensure your fridge runs smoothly.</p>
      </div>

      <div style={{ padding: '20px' }}>
        <h1>Washing Machine Repair Services</h1>
        <p>We provide professional washing machine repair services to keep your laundry routine running smoothly. Our experts handle all types and brands.</p>

      </div>


      <div style={{ padding: '20px' }}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Experienced and certified technicians</li>
          <li>Quick and reliable service</li>
          <li>Affordable pricing</li>
          <li>Service at your convenience</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default ACRepair;