"use client";

import { useState } from "react";

import React from "react";
import Button from "../../components/button";
import styles from "../../styles/login.module.css";

export default function Login() {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.first_column}>
          <h2 className={styles.title_left}> Bem vindo de volta!</h2>

          <p className={styles.subtitle}></p>
          <p className={styles.subtitle}>Logue com suas informações pessoais</p>
          <Button text='Entrar' />
        </div>

        <div className={styles.second_column}>
          <h2 className={styles.title}>Crie sua conta</h2>
          <div className={styles.media_icons}>
            <ul>
              <a href="#"><img src="/email.png" alt="Email" /></a>
              <a href="#"><img src="/facebook.png" alt="Email" /></a>
              <a href="#"><img src="/instagram.png" alt="Email" /></a>
            </ul>
          </div>
          <p className={styles.description}>Preencha os dados para cadastro</p>
          
        </div>
      </div>
    </div>
  );
}
