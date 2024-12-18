import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import styles from './styles.module.css';

// Define the possible event types
type CateringEvent = 'CATERING' | 'BABY SHOWERING/FULL MOON CUSINES' | 'SPECIAL MEAL';

const CateringPage: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<CateringEvent>('CATERING');

    const cateringOptions: CateringEvent[] = [
        'CATERING',
        'BABY SHOWERING/FULL MOON CUSINES',
        'SPECIAL MEAL'
    ];

    const eventImages: Record<CateringEvent, string[]> = {
        'CATERING': ['/images/catering/catering1.jpg', '/images/catering/catering2.jpg','/images/catering/catering3.jpg','/images/catering/catering4.jpg','/images/catering/catering5.jpg'],
        'BABY SHOWERING/FULL MOON CUSINES': ['/images/catering/fullmoonMeal.jpg', '/images/catering/babyshower1.jpg'],
        'SPECIAL MEAL': ['/images/catering/specialmeal3.jpg', '/images/catering/specialmeal2.jpg','/images/catering/specialmeal1.jpg','/images/catering/specialmeal4.jpg','/images/catering/specialmeal5.jpg','/images/catering/specialmeal6.jpg','/images/catering/specialmeal7.jpg']
    };

    const handleSelection = (event: CateringEvent) => {
        setSelectedEvent(event);
    };

    return (
        <div className={styles.cateringPage}>
            <h2>CATERING SERVICES</h2>
            <div className={styles.cateringPageContainer} style={{display: 'flex'}}>
                {/* Left-side menu */}
                <div className={styles.cateringPageLeft}>
                    <ul className={styles.cateringPageList}>
                        {cateringOptions.map((option) => (
                            <li
                                key={option}
                                className={`cateringPageListItem ${selectedEvent === option ? 'selected' : ''}`}
                                onClick={() => handleSelection(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right-side content with carousel */}
                <div className={styles.cateringPageRight}>
                    <h3>{selectedEvent}.</h3>
                    <div className={styles.carouselWrapper}>
                        <Carousel
                            autoPlay={true}
                            navButtonsAlwaysVisible
                            indicators={false}
                            stopAutoPlayOnHover
                            swipe
                        >
                            {eventImages[selectedEvent].map((image, i) => (
                                <div key={i} className={styles.carouselItem}>
                                    <img
                                        src={image}
                                        alt={`${selectedEvent} ${i}`}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <p>
                        Details about {selectedEvent}. Contact us for more information and planning assistance!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CateringPage;
