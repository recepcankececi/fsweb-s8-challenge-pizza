import { Link } from "react-router-dom";
import styles from "./Success.module.css";

export default function Success({ data }) {
  const order = data || {};

  return (
    <section className={styles.container} data-cy="success-page">
  <h1 className={styles.brand} data-cy="brand">Teknolojik Yemekler</h1>

  <div className={styles.content}>
    <h2 className={styles.title} data-cy="success-title">
      TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!
    </h2>

    <div className={styles.details} data-cy="order-details">
      <h3>Sipariş Bilgileri</h3>
      <ul>
        <li><strong>İsim:</strong> <span data-cy="order-name">{order.isim || "—"}</span></li>
        <li><strong>Boyut:</strong> <span data-cy="order-size">{order.boyut || "—"}</span></li>
        <li><strong>Hamur:</strong> <span data-cy="order-dough">{order.hamur || "—"}</span></li>
        <li><strong>Ek Malzemeler:</strong> <span data-cy="order-extras">
          {order.malzemeler?.join(", ") || "—"}
        </span></li>
        <li><strong>Not:</strong> <span data-cy="order-note">{order.not || "—"}</span></li>
        <li><strong>Sipariş ID:</strong> <span data-cy="order-id">{order.id || "—"}</span></li>
        <li><strong>Oluşturulma:</strong> <span data-cy="order-date">
          {order.createdAt ? new Date(order.createdAt).toLocaleString() : "—"}
        </span></li>
      </ul>
    </div>

    <Link to="/order" className={styles.button} data-cy="new-order-btn">
      Yeni Sipariş Ver
    </Link>
  </div>
</section>

  );
}
