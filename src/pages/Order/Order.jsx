import styles from "./Order.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import RadioGroup from "../../components/RadioGroup";
import CheckboxGroup from "../../components/CheckboxGroup";
import SelectDropdown from "../../components/SelectDropdown";
import { TextInput, TextArea } from "../../components/TextFields";

export default function Order() {
  const [formData, setFormData] = useState({
    isim: "",
    boyut: "Orta",
    hamur: "İnce",
    malzemeler: [],
    not: "",
  });

  const [errors, setErrors] = useState({
    isim: true,
    boyut: false,
    hamur: false,
    malzemeler: true,
  });

  const history = useHistory();

  // --- HANDLERS ---
  function handleNameChange(value) {
    const valid = /^[A-Za-zÇĞİÖŞÜçğıöşü\s]{3,}$/.test(value);
    setFormData((prev) => ({ ...prev, isim: value }));
    setErrors((prev) => ({ ...prev, isim: !valid }));
  }

  function handleSizeChange(value) {
    setFormData((prev) => ({ ...prev, boyut: value }));
    setErrors((prev) => ({ ...prev, boyut: !value }));
  }

  function handleDoughChange(value) {
    setFormData((prev) => ({ ...prev, hamur: value }));
    setErrors((prev) => ({ ...prev, hamur: !value }));
  }

  function handleExtrasChange(updated) {
    const tooFew = updated.length < 4;
    const tooMany = updated.length > 10;
    const invalid = tooFew || tooMany;

    setFormData((prev) => ({ ...prev, malzemeler: updated }));
    setErrors((prev) => ({ ...prev, malzemeler: invalid }));
  }

  function handleNoteChange(value) {
    setFormData((prev) => ({ ...prev, not: value }));
  }

  // --- VALIDATION ---
  const formInvalid =
    errors.isim ||
    errors.boyut ||
    errors.hamur ||
    errors.malzemeler ||
    !formData.isim ||
    !formData.boyut ||
    !formData.hamur ||
    formData.malzemeler.length < 4 ||
    formData.malzemeler.length > 10;

  // --- SUBMIT ---
  function handleSubmit(e) {
    e.preventDefault();
    if (formInvalid) return;
    console.log("Form payload:", formData);
    setFormData({
      isim: "",
      boyut: "Orta",
      hamur: "İnce",
      malzemeler: [],
      not: "",
    });
    setErrors({
      isim: true,
      boyut: false,
      hamur: false,
      malzemeler: true,
    });
    history.push("/success");
  }

  return (
    <section className={styles.orderPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>Teknolojik Yemekler</h1>
        <p className={styles.subtitle}>Anasayfa &gt; Sipariş Oluştur</p>
      </header>

      <form onSubmit={handleSubmit} className={styles.form}>
        <h3>Position Absolute Acı Pizza</h3>

        <div className={styles.pizzaInfo}>
          <p style={{ fontSize: "1.6rem", fontWeight: "bold" }}>85.50₺</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              fontFamily: "var(--font-barlow)",
            }}
          >
            <p>4.9</p>
            <p>(200)</p>
          </div>
        </div>

        <p
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: "400",
          }}
        >
          Frontend Dev olarak hâlâ position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve çeşitli diğer
          malzemelerle kaplanmış, yüksek sıcaklıkta fırında pişirilen İtalyan
          kökenli bir lezzettir.
        </p>
        
        <div style={{display:"flex", alignItems:"center"}}>
          <TextInput
            label={
              <>
                Siparişi veren:
              </>
            }
            value={formData.isim}
            onChange={handleNameChange}
            placeholder="Adınızı girin"
          ></TextInput>
          {errors.isim && (
                <span style={{ color: "red", textAlign:"center", marginTop: "2rem", marginLeft:"1rem", fontSize:"0.8rem"}}>
                  *En az 3 karakter girin
                </span>
              )}
        </div>
        
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "12rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <RadioGroup
              label={
                <>
                  Boyut Seç
                  {errors.boyut && (
                    <span style={{ color: "red", marginLeft: "4px" }}>*</span>
                  )}
                </>
              }
              options={["Küçük", "Orta", "Büyük"]}
              name="pizza-size"
              value={formData.boyut}
              onChange={handleSizeChange}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <SelectDropdown
              label={
                <>
                  Hamur Seç
                  {errors.hamur && (
                    <span style={{ color: "red", marginLeft: "4px" }}>*</span>
                  )}
                </>
              }
              options={["İnce", "Orta", "Kalın"]}
              value={formData.hamur}
              onChange={handleDoughChange}
            />
          </div>
        </div>

        <CheckboxGroup
          label={
            <>
              Ek Malzemeler
              {errors.malzemeler && (
                <span style={{ color: "red", fontSize:"0.8rem", marginLeft:"1rem" }}>*En az 4 ürün seçin</span>
              )}
            </>
          }
          options={[
            "Pepperoni",
            "Sosis",
            "Kanada Jambonu",
            "Tavuk Izgara",
            "Soğan",
            "Domates",
            "Mısır",
            "Sucuk",
            "Jalepeno",
            "Sarımsak",
            "Biber",
            "Ananas",
            "Kabak",
          ]}
          selected={formData.malzemeler}
          onChange={handleExtrasChange}
        />

        <div style={{ marginTop: "2rem" }}>
          <TextArea
            label="Sipariş Notu"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={formData.not}
            onChange={handleNoteChange}
          />
        </div>

        <button
          data-cy="submit-order"
          type="submit"
          disabled={formInvalid}
          style={{
            backgroundColor: "var(--yellow)",
            color: "var(--dark)",
            fontFamily: "var(--font-barlow)",
            fontWeight: "600",
            fontSize: "1.4rem",
            padding: "1rem",
            borderRadius: "8px",
            border: "none",
            marginTop: "2rem",
            cursor: formInvalid ? "not-allowed" : "pointer",
            opacity: formInvalid ? 0.6 : 1,
            width: "30%",
          }}
        >
          Sipariş Ver
        </button>
      </form>
    </section>
  );
}
