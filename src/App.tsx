import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import HomePage from './pages/homepage/homepage';
import MenuPage from './pages/menu/menu';
import CateringPage from './pages/catering-delivery/catering';
import ContactPage from './pages/contact/contact';
import styles from './styles.module.css'; // Make sure your styles are imported
import AboutUsPage from './pages/about-us/about';

const App: React.FC = () => {
    return (
        <Router>
            <div className={styles.appContainer}>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about-us" element={<AboutUsPage />} />
                        <Route path="/menu" element={<MenuPage />} />
                        <Route path="/catering-delivery" element={<CateringPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
