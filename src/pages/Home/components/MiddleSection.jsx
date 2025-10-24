import styles from "./MiddleSection.module.css";
import { Link } from "react-router-dom";

export default function MiddleSection() {
  return (
    <section className={styles.middle}>
      <div className={styles.wrapper}>
        <div className={`${styles.card} ${styles.big}`}>
          <div style={{display:"flex", flexDirection:"column", gap:"1rem", marginTop:"2rem", marginLeft:"1rem"}}>
            <p style={{fontSize:"2.6rem"}} className={styles.head}>Özel<br />Lezzetus</p>
            <p className={styles.sub}>Position: Absolute Acı Burger</p>
            <Link to="/order" className={styles.button}>SİPARİŞ VER</Link>
          </div>
        </div>

        <div className={styles.column}>
          <div className={`${styles.card} ${styles.small1}`}>
            <p className={styles.head}>Hackathon<br />Burger Menü</p>
            <Link to="/order" className={styles.button}>SİPARİŞ VER</Link>
          </div>

          <div className={`${styles.card} ${styles.small2}`}>
            <p className={`${styles.head} ${styles.dark}`}>
              <span className={styles.red}>Çooook</span> hızlı<br />npm gibi kurye
            </p>
            <Link to="/order" className={styles.button}>SİPARİŞ VER</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
