import React from 'react';
import styles from './styles.module.css';

const AboutUsPage: React.FC = () => {
    return (
        <div className={styles.aboutPage}>
            <h2>ABOUT US</h2>
            
            <div className={styles.aboutContainer}>
                <div className={styles.aboutContent}>
                    <p>
                        Welcome to our restaurant! We are dedicated to serving high-quality meals
                        crafted with fresh, locally sourced ingredients. Our passion is bringing 
                        people together through the joy of delicious food.
                    </p>
                    <p>
                        Our team of talented chefs and staff work tirelessly to provide
                        a memorable dining experience, whether you join us for a casual meal, 
                        catering, or delivery.
                    </p>
                    <p>
                        We believe in sustainability, excellent service, and fostering a warm 
                        community where everyone feels welcome.
                    </p>
                </div>
            </div>

            <hr className={styles.sectionDivider} />

            <div className={styles.missionWrapper}>
                <h3>OUR MISSION</h3>
                <p>
                    We aim to create authentic culinary experiences by blending traditional recipes 
                    with modern innovation. Our goal is to make every meal a celebration, whether 
                    it's at our restaurant, your home, or a special event.
                </p>
            </div>

            <hr className={styles.sectionDivider} />

            <div className={styles.cateringServiceWrapper}>
                <h3>ASK US ABOUT OUR CATERING SERVICE!</h3>
                <p>
                    Elevate your upcoming health-focused events with our exquisite Taiwanese cuisines catering service. 
                    Our restaurant brings the vibrant flavors of customizable cuisines to your gatherings, 
                    ensuring a delectable and health-conscious dining experience for all your attendees.
                </p>
                <p>
                    Infuse your events with a burst of freshness and flavor as our catering adds a touch of 
                    wholesome indulgence to your special occasions.
                </p>
            </div>
        </div>
    );
};

export default AboutUsPage;
