import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Teknolojik Yemekler</h2>
        <h1 className={styles.title}>
          KOD ACIKTIRIR<br />PİZZA, DOYURUR
        </h1>

        <Link to="/order" className={styles.button}>
          ACIKTIM
        </Link>
      </div>
    </section>
  );
}
