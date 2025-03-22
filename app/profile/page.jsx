"use client";

import React from "react";
import User from "../../components/User";
import Biography from "../../components/biography";
import KnowledgeGrid from "../../components/KnowledgeGrid";
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
        <Biography
        title={"Biografia"}
        text={"Meu nome é Giovanna Caron, tenho 16 anos e sou estudante do curso de Análise e Desenvolvimento de Sistemas no SENAI Valinhos. Atualmente, estou no 2º ano do ensino médio e no 1º módulo do curso técnico. Sou apaixonada por tecnologia e programação, e pretendo seguir carreira na área de desenvolvimento de software."}>
        </Biography>
         
        <KnowledgeGrid/>
        
        </div>
      </div>
    </div>
  );
}
