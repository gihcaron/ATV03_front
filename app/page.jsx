"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/redirecionando.module.css";

export default function Redirecionamento() {
  const router = useRouter();

  useEffect(() => {
    router.push("/cadastro");
  }, [router]);

  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
        <p className={styles.text}>Redirecionando...</p>
    
    </div>
  );
}
