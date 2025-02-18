import styles from "./TimeLine.module.css";

function TimeLine() {
  return (
    <container>
      <div className={styles.timeline}>
        <div className={styles.checkpoint}>
          <div>
            <h3>Jun 2021</h3>
          </div>
        </div>
        <div className={styles.checkpoint}>
          <div>
            <h3>Fev 2024</h3>
          </div>
        </div>
        <div className={styles.checkpoint}>
          <div>
            <h3>Março 2024</h3>
          </div>
        </div>
        <div className={styles.checkpoint}>
          <div>
            <h3>Abril 2024</h3>
          </div>
        </div>
      </div>
      <div className={styles.timelinedow}>
        <div className={styles.checkpointdow}>
          <div>
            <p>Primeiro emprego como dev Flutter junior</p>
          </div>
        </div>
        <div className={styles.checkpointdow}>
          <div>
            <p>Co-organizador do GDG Máringa</p>
          </div>
        </div>
        <div className={styles.checkpointdow}>
          <div>
            <p>Comecei a formação em tecnologia "full-stack" na escola DNC</p>
          </div>
        </div>
        <div className={styles.checkpointdow}>
          <div>
            <p>Desenvolvedor especialista Flutter</p>
          </div>
        </div>
      </div>
    </container>
  );
}

export default TimeLine;
