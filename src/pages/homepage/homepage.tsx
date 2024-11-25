import React from 'react';
import styles from './styles.module.css';
import logo from '../../assets/logo.jpg';
import catering from '../../assets/catering.webp';
import delivery from '../../assets/delivery.webp';
import fullMoon from '../../assets/fullmoon.jpg';
import afternoonTea from '../../assets/afternoontea.jpg';
import restaurantPhoto from '../../assets/rest.jpg';
import Button from '@mui/material/Button';

const cateringOptions = [
    { 
        name: 'CATERING', 
        image: catering, 
        description: 'Fully coordinated party with chefs and attendant staff providing freshly cooked food.' 
    },
    { 
        name: 'DELIVERY', 
        image: delivery, 
        description: 'Turn anywhere into a party venue and enjoy a special menu delivered at the designated time.' 
    },
    { 
        name: 'BABY SHOWERING/FULL MOON CUISINES', 
        image: fullMoon, 
        description: 'Celebrate special moments with a curated menu featuring symbolic dishes, perfect for honoring traditions and loved ones.' 
    },
    { 
        name: 'AFTERNOON TEA', 
        image: afternoonTea, 
        description: 'Indulge in an elegant assortment of freshly baked pastries, sandwiches, and premium teas, crafted for a relaxing midday treat.' 
    },
];

const HomePage: React.FC = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.banner}>
                <div>
                    <h1>SERVICES</h1>
                    <div className={styles.servicesContainer}>
                        {cateringOptions.map((option) => (
                            <div className={styles.serviceItem} key={option.name}>
                                <div className={styles.bannerImage}>
                                    <img src={option.image} alt={option.name} />
                                </div>
                                <h3>{option.name}</h3>
                                <p>{option.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.imageRightService}></div>
            </div>
            <div className={styles.imageLeftConcept}></div>
            <div className={styles.divider}></div>
            <section className={styles.introduction}>
                <h1>CONCEPT</h1>
                <div>
                    <p>
                        Owl Owl Restaurant is a haven for culinary excellence and memorable dining experiences. We pride ourselves on offering exquisite flavors, impeccable service, and a welcoming ambiance that feels like home. Our mission is to bring joy and satisfaction to every guest, whether you're celebrating a milestone or savoring a quiet meal.
                    </p>
                    <p>
                        Owl Owl Restaurant is a haven for culinary excellence and memorable dining experiences. We pride ourselves on offering exquisite flavors, impeccable service, and a welcoming ambiance that feels like home. Our mission is to bring joy and satisfaction to every guest, whether you're celebrating a milestone or savoring a quiet meal.
                    </p>
                    <p>
                        Owl Owl Restaurant is a haven for culinary excellence and memorable dining experiences. We pride ourselves on offering exquisite flavors, impeccable service, and a welcoming ambiance that feels like home. Our mission is to bring joy and satisfaction to every guest, whether you're celebrating a milestone or savoring a quiet meal.
                    </p>
                </div>
            </section>
            <div className={styles.divider}></div>
            <section className={styles.location}>
                <h1>LOCATION</h1>
                <p>
                    5026 W Cactus Rd #10, Glendale, AZ 85304
                </p>
                <img src={restaurantPhoto} alt="restaurant photo" />
                <Button 
                    variant="contained" 
                    color="success"
                    href="https://maps.app.goo.gl/F7xXXiAUwT5RvmUb9" 
                    target="_blank" 
                >
                    VIEW MAP
                </Button>
            </section>
        </div>
    );
};

export default HomePage;
