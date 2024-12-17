import React from 'react';
import { Instagram, ChatBubble } from '@mui/icons-material'; // Import Material UI Icons
import styles from './styles.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>Follow us on</p>
            <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/jacatering_phoenix/" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <Instagram fontSize="large" className={styles.icon} />
                </a>
                <a href="https://line.me" target="_blank" rel="noreferrer" aria-label="Line">
                    <ChatBubble fontSize="large" className={styles.icon} />
                </a>
            </div>
            <p>
                Contact: <a href="tel:+11234567890" className={styles.phone}>+1 (123) 456-7890</a>
            </p>
        </footer>
    );
};

export default Footer;
