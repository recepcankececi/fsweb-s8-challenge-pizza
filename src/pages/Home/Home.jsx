import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Teknolojik Yemekler</h2>
        <h1 className={styles.title}>
          KOD ACIKTIRIR<br />PİZZA, DOYURUR
        </h1>
        <button className={styles.button}>ACIKTIM</button>
      </div>
    </section>
  );
}
