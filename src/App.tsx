import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import HomePage from './pages/homepage/homepage';
import MenuPage from './pages/menu/menu';
import CateringPage from './pages/catering/catering';
import DeliveryPage from './pages/delivery/delivery';
import ContactPage from './pages/contact/contact';
import styles from './styles.module.css'; // Make sure your styles are imported

const App: React.FC = () => {
    return (
        <Router>
            <div className={styles.appContainer}>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/menu" element={<MenuPage />} />
                        <Route path="/catering" element={<CateringPage />} />
                        <Route path="/delivery" element={<DeliveryPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
