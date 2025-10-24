import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import MiddleSection from "./components/MiddleSection";
import FoodCards from "./components/FoodCards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h2 className={styles.subtitle}>Teknolojik Yemekler</h2>
          <h1 className={styles.title}>
            KOD ACIKTIRIR<br />PİZZA, DOYURUR
          </h1>
          <Link to="/order" className={styles.button} data-cy="home-aciktim">
            ACIKTIM
          </Link>
        </div>
      </section>

      <main className={styles.mainContent}>
        <MenuBar />
        <MiddleSection />
        <FoodCards />
      </main>

      <Footer />
    </>
  );
}
