import React from 'react';
import styles from './styles.module.css';

const menuData = [
    { id: 1, name: 'Grilled Chicken Caesar Salad', price: 12, imageUrl: '/images/menu/photo1.png', tags: ['Gluten Free', 'Contains Dairy'] },
    { id: 2, name: 'Vegan Buddha Bowl', price: 15, imageUrl: '/images/menu/photo2.jpg', tags: ['Vegan', 'Gluten Free'] },
    { id: 3, name: 'Peanut Butter Chicken', price: 18, imageUrl: '/images/menu/photo3.webp', tags: ['Contains Peanuts', 'Spicy'] },
    { id: 4, name: 'Spaghetti Carbonara', price: 22, imageUrl: '/images/menu/photo4.jpg', tags: ['Contains Dairy'] },
    { id: 5, name: 'Grilled Chicken Caesar Salad', price: 12, imageUrl: '/images/menu/photo1.png', tags: ['Gluten Free', 'Contains Dairy'] },
    { id: 6, name: 'Vegan Buddha Bowl', price: 15, imageUrl: '/images/menu/photo2.jpg', tags: ['Vegan', 'Gluten Free'] },
    { id: 7, name: 'Peanut Butter Chicken', price: 18, imageUrl: '/images/menu/photo3.webp', tags: ['Contains Peanuts', 'Spicy'] },
    { id: 8, name: 'Spaghetti Carbonara', price: 22, imageUrl: '/images/menu/photo4.jpg', tags: ['Contains Dairy'] },
];

const MenuPage: React.FC = () => {
    return (
        <div className={styles.menuPage}>
            <h2>Our Menu</h2>
            <div className={styles.menuItems}>
                {menuData.map((dish) => (
                    <div key={dish.id} className={styles.menuItem}>
                        <img src={dish.imageUrl} alt={dish.name} className={styles.dishImage} />
                        <div className={styles.dishTags}>
                            {dish.tags.map((tag, index) => (
                                <span key={index} className={styles.dishTag}>{tag}</span>
                            ))}
                        </div>
                        <h2 className={styles.dishName}>{dish.name}</h2>
                        <p className={styles.dishPrice}>${dish.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuPage;
