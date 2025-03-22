import React from 'react';
import styles from '../styles/user.module.css'

export default function User({name, age, city, school, course}) {
    return (
    <User>
        <div className={styles.box}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.text}>{age}</p>
          <p className={styles.text}>{city}</p>
          <p className={styles.text}>{school}</p>
          <p className={styles.text}>{course}</p>
        </div>
    </User>
    );
}
