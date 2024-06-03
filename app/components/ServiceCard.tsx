
/* app/components/ServiceCard.tsx */
import React from 'react';
import styles from '../ServiceCard.module.css';
import Link from 'next/link';
 
interface ServiceCardProps {
  title: string;
  image: string;
  link: string;
}
 
const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, link }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};
 
export default ServiceCard;