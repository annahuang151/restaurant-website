import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import styles from './styles.module.css';

const DeliveryPage: React.FC = () => {
    return (
        <article className={styles.deliveryPage}>
            <h2>DELIVERY</h2>

            <h3>Seasonal vegetable box</h3>
            <img src='/images/delivery/bentobox.jpg' alt="bento box" />
            <p>
                Our delivery service is available for locations within 10 kilometers of the restaurant.
            </p>
            <p>
                Place your order through our website or call us at +1 (123) 456-7890. 
                (Please place your order 1 day earlier in advance.)
            </p>
            <p>
                Enjoy fresh and delicious food delivered right to your doorstep!
            </p>
            <Button
                variant="contained" 
                color="success"
                href="/contact" 
                target="_self"
                className={styles.contactButton}
            >
                CONTACT US
            </Button>
        </article>
    );
};

export default DeliveryPage;
