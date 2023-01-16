import React from 'react';
import styles from './MenuButton.module.scss';

import ArrowBackIcon from '@mui/icons-material/FavoriteBorder';

const MenuButton = (props:any) => (
    <>
        <div className={styles.buttonContainer}>
            <div className = {styles.imageContainer}>
                {props.icon}
            </div>
            <div className = {styles.textContainer}>
                {props.title}
            </div>
        </div>
    </>
)

export default MenuButton;