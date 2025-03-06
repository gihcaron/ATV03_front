import React from 'react';
import styles from '../styles/button.module.css';

export default function button({text}) {
    return (
        <button className={styles.button}>{text}
        </button>
    );
}