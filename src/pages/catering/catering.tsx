import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import styles from './styles.module.css';

// Define the possible event types
type CateringEvent = 'CATERING' | 'BABY SHOWERING/FULL MOON CUSINES' | 'AFTERNOON TEA' | 'BIRTHDAY PARTY';

const CateringPage: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<CateringEvent>('CATERING');
    const [index, setIndex] = useState(0);

    const cateringOptions: CateringEvent[] = [
        'CATERING',
        'BABY SHOWERING/FULL MOON CUSINES',
        'AFTERNOON TEA',
        'BIRTHDAY PARTY',
    ];

    const eventImages: Record<CateringEvent, string[]> = {
        'CATERING': ['/images/catering/photo3.jpg', '/images/catering/photo4.jpg'],
        'BABY SHOWERING/FULL MOON CUSINES': ['/images/catering/photo3.jpg', '/images/catering/photo4.jpg'],
        'AFTERNOON TEA': ['/images/catering/photo3.jpg', '/images/catering/photo4.jpg'],
        'BIRTHDAY PARTY': ['/images/catering/photo3.jpg', '/images/catering/photo4.jpg'],
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
                            index={index}
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
