import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css'; // Import the CSS module

const Navbar: React.FC = () => {
    const location = useLocation(); // Get the current route
    const isHomePage = location.pathname === '/'; // Check if it's the home page

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.banner} ${isHomePage ? styles.large : styles.small}`}>
                <div className={styles.navbarContent}>
                    <Link to="/" className={styles.navbarLogo}>
                        <img src={require('../../assets/logo.jpg')} alt="Mossa Catering & Deli Logo" />
                    </Link>
                </div>
            </div>
            <ul className={styles.navbarLinks}>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/catering">Catering</Link></li>
                <li><Link to="/delivery">Delivery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
