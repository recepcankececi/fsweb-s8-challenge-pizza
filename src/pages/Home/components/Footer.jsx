import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.col}>
          <h3 className={styles.logo}>Teknolojik<br />Yemekler</h3>
          <ul className={styles.list}>
            <li>
              <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Adres" />
              <span>341 Londonberry Road,<br />İstanbul / Türkiye</span>
            </li>
            <li>
              <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Mail" />
              <span>aciktim@teknolojikyemekler.com</span>
            </li>
            <li>
              <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Telefon" />
              <span>+90 216 123 45 67</span>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.head}>Hot Menu</h4>
          <ul className={styles.links}>
            <li><a href="#">Terminal Pizza</a></li>
            <li><a href="#">JS-High Hackathon Pizza</a></li>
            <li><a href="#">useEffect Tavuklu Burger</a></li>
            <li><a href="#">Beyaz Domates Frosty</a></li>
            <li><a href="#">Testleri Geçti! Mısır Burger</a></li>
            <li><a href="#">Position Absolute Acı Burger</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.head}>instagram</h4>
          <div className={styles.igGrid}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`/images/iteration-2-images/footer/insta/li-${i}.png`}
                alt={`Instagram ${i}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Teknolojik Yemekler</p>
      </div>
    </footer>
  );
}
