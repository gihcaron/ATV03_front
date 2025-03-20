import React from 'react';
import styles from '../styles/button.module.css';

export default function button({text, className, onClick}) {
    return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
        {text}
    </button>
    );
}