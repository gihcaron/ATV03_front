import React from 'react';
import styles from '../styles/biography.module.css'

export default function biography ({text, title}) {
    return (
    <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
    </div>
    );
}
