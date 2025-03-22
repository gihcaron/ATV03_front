import styles from '../styles/knowledgeGrid.module.css';

const knowledgeItems = [
    { name: "HTML", icon: "bi-filetype-html" },
    { name: "CSS", icon: "bi-filetype-css" },
    { name: "JavaScript", icon: "bi-filetype-js" },
    { name: "React", icon: "bi-bootstrap-reboot" },
    { name: "Node.js", icon: "bi-server" },
    { name: "MySQL", icon: "bi-database" },
    { name: "Git", icon: "bi-git" }
  ];

export default function KnowledgeGrid(text) {
    return (
        <div className={styles.knowledgeGrid}>
        <h2 className={styles.title}>Conhecimentos</h2>
        <div className={styles.grid}>
          {knowledgeItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <i className={`bi ${item.icon} ${styles.icon}`}></i>
              <p className={styles.text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

