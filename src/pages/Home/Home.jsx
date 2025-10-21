import styles from "./Home.module.css";
import { useHistory } from "react-router-dom";

export default function Home() {

  const history = useHistory();

  function handleClick() {
    history.push("/order");
  }

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Teknolojik Yemekler</h2>
        <h1 className={styles.title}>
          KOD ACIKTIRIR<br />PİZZA, DOYURUR
        </h1>
        <button onClick={handleClick} className={styles.button}>ACIKTIM</button>
      </div>
    </section>
  );
}
