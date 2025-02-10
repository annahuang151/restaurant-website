import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './styles.module.css';
import Button from '@mui/material/Button';
import { CupSoda, Drumstick, House, Salad } from 'lucide-react';

const cateringOptions = [
    { 
        name: 'CATERING', 
        image: 'images/homepage/catering1.jpg',
        description: 'Coordinated events with chefs and staff serving freshly cooked food for an unforgettable dining experience.',
        link: '/catering-delivery'
    },
    { 
        name: 'DELIVERY', 
        image: 'images/homepage/delivery.jpg', 
        description: 'Timely delivery of authentic Taiwanese and Asian bento boxes, bringing flavorful and convenient meals to your desired location.',
        link: '/catering-delivery'
    },
    { 
        name: 'BABY SHOWERING/FULL MOON', 
        image: 'images/homepage/fullmoonMeal.jpg', 
        description: 'Celebrate traditions with symbolic dishes crafted for honoring loved ones during cherished life milestones.',
        link: '/catering-delivery'
    },
    { 
        name: 'SPECIAL MEAL', 
        image: 'images/homepage/specialmeal.jpg', 
        description: 'Effortless celebrations with a special menu delivered on time, transforming any venue into a party spot.',
        link: '/catering-delivery'
    },
];

const featureItems = [
    {
        icon: <House size={40} />,
        title: "FAMILY OWNED",
        description: "We're a family-owned business passionate about quality ingredients and top-notch service!"
    },
    {
        icon: <Drumstick size={40} />,
        title: "QUALITY CHICKEN",
        description: "We use only high-quality, farm-raised chicken to ensure the best taste and freshness in every meal."
    },
    {
        icon: <CupSoda size={40} />,
        title: "FRESH TEAS",
        description: "We brew our premium Jasmine, Earl Grey, and Roasted Oolong teas fresh daily for a refreshing experience."
    },
    {
        icon: <Salad size={40} />,
        title: "VARIOUS BENTO CHOICES",
        description: "Enjoy a variety of bento boxes with fresh, nutritious ingredients tailored to your taste."
    }
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
                                <Link to={option.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className={styles.bannerImage}>
                                        <img src={option.image} alt={option.name} />
                                    </div>
                                    <h3>{option.name}</h3>
                                    <p>{option.description}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.divider}></div>
            <div className={styles.imageLeftConcept}></div>

            {/* Concept Section */}
            <section className={styles.introduction}>
                <h1>CONCEPT</h1>
                <div className={styles.conceptText}>
                    <p>
                            Owl Owl Restaurant is a haven of culinary artistry, blending passion, flavor, and tradition in every dish. With handcrafted menus showcasing Taiwanese and Asian delicacies alongside global inspirations, we cater to diverse tastes with heartfelt hospitality. Whether celebrating milestones or savoring quiet moments, we offer impeccable service, a welcoming ambiance, and the comforting taste of home. Let us make your dining experience extraordinary.
                    </p>
                    <br />
                    <p>
                            貓頭鷹餐廳，不只是餐廳，更是美食的天堂！我們專注於台灣及亞洲料理，從每道菜的滋味到服務的細膩，都充滿著我們的用心與熱情。在這裡，您可以享受到「媽媽的味道」與「主廚的創意」完美融合，無論是慶祝大事，還是偷偷犒賞自己，都能滿足挑剔的味蕾。
                            我們的使命很簡單：讓您吃得開心，笑得燦爛！
                    </p>
                </div>
            </section>

            <section className={styles.featuresGrid}>
                {featureItems.map((item, index) => (
                    <div key={index} className={styles.featureItem}>
                        {item.icon}
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </section>

            <section className={styles.location}>
                <h1>LOCATION</h1>
                <p>5026 W Cactus Rd #10, Glendale, AZ 85304</p>
                <p>Monday, Tuesday CLOSED</p>
                <p>Wednesday - Friday 12PM - 8PM</p>
                <p>Saturday 11:30AM - 8PM</p>
                <p>Sunday 11:30AM - 7PM</p>
                <img src={'images/homepage/restaurant.jpg'} alt="restaurant" />
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
