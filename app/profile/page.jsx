"use client";

import React from "react";
import User from "../../components/User";
import styles from "../../styles/profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles.first_column}></div>

        <div className={styles.second_column}>
        <User
            name="Giovanna Caron"
            age="16 anos"
            city="Valinhos- SP"
            school="SENAI Valinhos"
            course="Análise e Desenvolvimento de Sistemas"
        />
            
            <div className={styles.biografia}>
                <h2 className={styles.title_left}>Habilidades</h2>
                <p className={styles.text}> Durante minha formação técnica em Análise e Desenvolvimento de Sistemas no SENAI, desenvolvi habilidades essenciais para a criação, manutenção e otimização de softwares e sistemas computacionais. O curso me proporcionou uma base sólida em programação, banco de dados e metodologias ágeis, sempre com uma abordagem prática e alinhada às demandas do mercado.
                Ao longo da formação, tive a oportunidade de aplicar os conhecimentos em projetos práticos, fortalecendo minha capacidade de solucionar problemas e desenvolver sistemas eficientes. Essa experiência contribuiu significativamente para minha preparação profissional na área de tecnologia. 🚀</p>
            </div>
            <div className={styles.conhecimentos}>
                <h2 className={styles.title_left}>Conhecimentos</h2>
                <p className={styles.text}> HTML</p>
                <p className={styles.text}> CSS</p>
                <p className={styles.text}> JavaScript</p>
                <p className={styles.text}> React</p>
                <p className={styles.text}> Node.js</p>
                <p className={styles.text}> MySQL</p>
                <p className={styles.text}> Git</p>               
            </div>
        </div>
      </div>
    </div>
  );
}
