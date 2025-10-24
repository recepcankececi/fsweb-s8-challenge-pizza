import styles from "./MenuBar.module.css";

const icons = [
  { id: 1, src: "/images/iteration-2-images/icons/1.svg", text: "YENİ! Kore" },
  { id: 2, src: "/images/iteration-2-images/icons/2.svg", text: "Pizza" },
  { id: 3, src: "/images/iteration-2-images/icons/3.svg", text: "Burger" },
  { id: 4, src: "/images/iteration-2-images/icons/4.svg", text: "Kızartmalar" },
  { id: 5, src: "/images/iteration-2-images/icons/5.svg", text: "Fast food" },
  { id: 6, src: "/images/iteration-2-images/icons/6.svg", text: "Gazlı İçecek" },
];

export default function MenuBar() {
  return (
    <div className={styles.menuBar}>
      <div className={styles.inner}>
        <nav className={styles.menu}>
          <ul>
            {icons.map((icon) => (
              <li key={icon.id}>
                <a href="#">
                  <img src={icon.src} alt={icon.text} />
                  <span>{icon.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
