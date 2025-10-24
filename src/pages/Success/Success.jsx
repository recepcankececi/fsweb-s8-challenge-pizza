import { useLocation, Link } from "react-router-dom";
import styles from "./Success.module.css";

export default function Success() {
  const { state } = useLocation();
  const order = state || {};

  return (
    <section className={styles.container}>
      <h1 className={styles.brand}>Teknolojik Yemekler</h1>

      <div className={styles.content}>
        <h2 className={styles.title}>
          TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!
        </h2>

        <div className={styles.details}>
          <h3>Sipariş Bilgileri</h3>
          <ul>
            <li><strong>İsim:</strong> {order.isim || "—"}</li>
            <li><strong>Boyut:</strong> {order.boyut || "—"}</li>
            <li><strong>Hamur:</strong> {order.hamur || "—"}</li>
            <li>
              <strong>Ek Malzemeler:</strong>{" "}
              {order.malzemeler?.length
                ? order.malzemeler.join(", ")
                : "—"}
            </li>
            <li><strong>Not:</strong> {order.not || "—"}</li>
            <li><strong>Sipariş ID:</strong> {order.id || "—"}</li>
            <li><strong>Oluşturulma:</strong> {order.createdAt ? new Date(order.createdAt).toLocaleString() : "—"}</li>
          </ul>
        </div>

        <Link to="/order" className={styles.button}>
          Yeni Sipariş Ver
        </Link>
      </div>
    </section>
  );
}
