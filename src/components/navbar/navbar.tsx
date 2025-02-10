import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css'; // Import CSS module
import { Menu, X } from 'lucide-react'; // Hamburger & Close icons

const Navbar: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.banner} ${isHomePage ? styles.large : styles.small}`}>
                {/* Hamburger menu (now positioned at the top-left) */}
                <button className={styles.menuToggle} onClick={toggleMenu}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <div className={styles.navbarContent}>
                    <Link to="/" className={styles.navbarLogo}>
                        <img src="/owl_logo.svg" alt="Owl Logo" className={styles.navbarLogo} />
                    </Link>
                </div>
            </div>

            <ul className={`${styles.navbarLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
                <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
                <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
                <li><Link to="/catering-delivery" onClick={toggleMenu}>Catering & Delivery</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
