
'use client';
 
/* app/components/ContactForm.tsx */
import React, { useEffect, useState } from 'react';
import styles from '../ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { getUsers } from '../redux/features/jobs/usersSlice';
 
const ContactForm: React.FC = () => {
   
    const dispatch = useDispatch<AppDispatch>();
    const [formData, setFormData] = useState({ name: '', email: '', address: '', phone: '' });
    const [errors, setErrors] = useState<{ phone?: string }>({});

    
  useEffect(() => {

    dispatch(getUsers({}));

  }, []);
 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
 
    const validatePhone = (phone: string) => {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            setErrors({ phone: 'Invalid phone number format. Please enter a 10-digit number.' });
            return false;
        }
        setErrors({});
        return true;
    };
 
    const sanitizeAddress = (address: string) => {
        return address.replace(/\n/g, ' ');
    };
 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validatePhone(formData.phone)) {
            const sanitizedFormData = {
                ...formData,
                address: sanitizeAddress(formData.address),
            };
            console.log(sanitizedFormData);
            setFormData({ name: '', email: '', address: '', phone: '' });

            
            // Handle form submission logic here
        }
    };
 
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    required
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className={styles['form-group']}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    required
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className={styles['form-group']}>
                <label htmlFor="address">Address</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    required
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className={styles['form-group']}>
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    required
                    onChange={(e) => handleChange(e)}
                />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </div>
            <div className={styles['form-group']}>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};
 
export default ContactForm;