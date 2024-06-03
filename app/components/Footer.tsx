/* app/components/Footer.tsx */
"use client"
import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import { useRouter } from 'next/navigation'


const MenuItem = styled.li`
  cursor: pointer;
`;


const Footer: React.FC = () => {
  const router = useRouter()

  return (



    <footer className='footer'>



      <div className="legal">
        <p>&copy; 2024 Cool Care All rights reserved.</p>
      </div> 



    </footer>


  );
};

export default Footer;