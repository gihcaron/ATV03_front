"use client";

import { useState } from "react";
import {useRouter} from 'next/navigation';

import React from "react";
import Button from "../../components/button";
import styles from "../../styles/home.module.css";

export default function Home() {

  const router = useRouter();

  const  [input1, setInput1] = useState("");
  const  [input2, setInput2] = useState("");
  const  [input3, setInput3] = useState("");
  const  [input4, setInput4] = useState("");
  const [match, setMatch] = useState(null);
  const [error, setError] = useState(null);

  const hasNumber = (str) => /\d/.test(str);
  const UpperCase = (str) => /[A-Z]/.test(str);

  const handleCheck= () => {
    if(input3 !== input4){
      setMatch(false);
      setError('As senhas não coincidem');
    }  else if (input4.length === 0){
      setMatch(false);
      setError('A senha não pode ser vazia');
    } else if (input3.length < 6){
      setMatch(false);
      setError('A senha deve ter no mínimo 6 caracteres');
    } else if (input4.length < 6){
      setMatch(false);
      setError('A senha deve ter no mínimo 6 caracteres');
    } else if (input3.length === 0){
      setMatch(false);
      setError('A senha não pode ser vazia');
    }  else if (!hasNumber(input3)){
      setMatch(false);
      setError('A senha deve conter números');
    }else if (!UpperCase(input3)){
      setMatch(false);
      setError('A senha deve conter letras maiúsculas');
    }
    else {
      setMatch(true);
      setError(null)
      router.push("/profile");
      setError('Usuário cadastrado com sucesso');
    }

  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.first_column}>
          <h2 className={styles.title_left}> Bem vindo!</h2>

          <p className={styles.subtitle}>Faça login para continuar</p>
          <p className={styles.subtitle}>Logue com suas informações pessoais</p>
          <Button onClick={() => router.push("/login")} text='Entrar' />
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
          <form action="" className="form">
            <input type="text" 
            placeholder="Nome" 
            className={styles.input} 
            value={input1} 
            onChange={(e) => setInput1(e.target.value)}/>

            <input type="email" 
            placeholder="Email" 
             className={styles.input} 
             value={input2}
             onChange={(e) => setInput2(e.target.value)} 
             />

            <input type="password"
            placeholder="Senha" 
            className={styles.input}
            value={input3}
            onChange={(e) => setInput3(e.target.value)} />

            {match && <p className="error">{setError}</p>}

            <input type="password"
            placeholder="Senha" 
            className={styles.input}
            value={input4}
            onChange={(e) => {
            const value = e.target.value;
            setInput4(value);
            }}
             />

            {match && <p className="error">{setError}</p>}

          </form>
            <Button text="Cadastrar" 
            className={styles.button}
            onClick={handleCheck} />
            {""}
            {match !== null && <p color=" rgb(#484930)">{error}</p>}
            {""}
        </div>
      </div>
    </div>
  );
}
