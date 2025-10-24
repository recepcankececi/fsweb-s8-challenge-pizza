import styles from "./FoodCards.module.css";

const categories = [
  { id: 1, icon: "/images/iteration-2-images/icons/1.svg", name: "Ramen" },
  { id: 2, icon: "/images/iteration-2-images/icons/2.svg", name: "Pizza" },
  { id: 3, icon: "/images/iteration-2-images/icons/3.svg", name: "Burger" },
  { id: 4, icon: "/images/iteration-2-images/icons/4.svg", name: "French fries" },
  { id: 5, icon: "/images/iteration-2-images/icons/5.svg", name: "Fast food" },
  { id: 6, icon: "/images/iteration-2-images/icons/6.svg", name: "Soft drinks" },
];

const foods = [
  {
    id: 1,
    img: "/images/iteration-2-images/pictures/food-1.png",
    name: "Terminal Pizza",
    rating: "4.9 ★",
    time: "30dk",
    price: "60₺",
  },
  {
    id: 2,
    img: "/images/iteration-2-images/pictures/food-2.png",
    name: "Position Absolute Acı Pizza",
    rating: "4.8 ★",
    time: "32dk",
    price: "80₺",
  },
  {
    id: 3,
    img: "/images/iteration-2-images/pictures/food-3.png",
    name: "useEffect Tavuklu Burger",
    rating: "4.7 ★",
    time: "28dk",
    price: "86₺",
  },
];

export default function FoodCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <p className={styles.subtitle}>en çok paketlenen menüler</p>
          <h2 className={styles.title}>Acıktıran Kodlara Doyuran Lezzetler</h2>
        </div>

        <div className={styles.pills}>
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              className={`${styles.pill} ${idx === 0 ? styles.active : ""}`}
            >
              <img src={cat.icon} alt={cat.name} />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        <div className={styles.cards}>
          {foods.map((food) => (
            <article key={food.id} className={styles.card}>
              <div className={styles.cardImg}>
                <img src={food.img} alt={food.name} />
              </div>
              <h3 className={styles.cardTitle}>{food.name}</h3>
              <div className={styles.meta}>
                <span className={styles.left}>{food.rating}</span>
                <span className={styles.mid}>{food.time}</span>
                <span className={styles.right}>{food.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
