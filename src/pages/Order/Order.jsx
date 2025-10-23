import styles from "./Order.module.css";
import React from "react";
import RadioGroup from "../../components/RadioGroup";
import CheckboxGroup from "../../components/CheckboxGroup";
import SelectDropdown from "../../components/SelectDropdown";
import { TextInput, TextArea } from "../../components/TextFields";

export default function Order() {
  const [size, setSize] = React.useState("Orta");
  const [name, setName] = React.useState("");
  const [dough, setDough] = React.useState("İnce");
  const [extras, setExtras] = React.useState([]);
  const [note, setNote] = React.useState("");
  
  return (
    <section className={styles.orderPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>Teknolojik Yemekler</h1>
        <p className={styles.subtitle}>Anasayfa &gt; Sipariş Oluştur</p>
      </header>

      <form className={styles.form}>
        <h3>Position Absolute Acı Pizza</h3>
        <div className={styles.pizzaInfo}> 
          <p style={{fontSize:"1.6rem", fontWeight:"bold"}}>85.50₺</p>
          <div style={{display:"flex", alignItems:"center", gap:"2rem", fontFamily:"var(--font-barlow)"}}>
            <p>4.9</p>
            <p>(200)</p>
          </div>
        </div>
        <p style={{fontFamily:"var(--font-barlow)", fontWeight:"400"}}>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel
          olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş 
          mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . 
          Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <TextInput label="Siparişi veren:" value={name} onChange={setName} placeholder="Adınızı girin" />
        <div style={{display:"flex", alignItems:"flex-start", gap:"12rem", marginTop:"1rem"}}>
          <div style={{display:"flex", flexDirection:"column", gap:"1rem", marginTop:"2rem"}}>
            <RadioGroup
            label="Boyut Seç"
            options={["Küçük", "Orta", "Büyük"]}
            name="pizza-size"
            value={size}
            onChange={setSize}
            />
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:"1rem", marginTop:"2rem"}}>
            <SelectDropdown
              label="Hamur Seç"
              options={["İnce", "Orta", "Kalın"]}
              value={dough}
              onChange={setDough}
            />
          </div>
        </div>
        <div >
          <CheckboxGroup
            label="Ek Malzemeler"
            options={["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", 
              "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak"]}
            selected={extras}
            onChange={setExtras}
          />
        </div>
        <div style={{marginTop:"2rem"}}>
          <TextArea
            style={{}} 
            label="Sipariş Notu" 
            placeholder="Siparişine eklemek istediğin bir not var mı?" 
            value={note} 
            onChange={setNote}
          />
        </div>
      </form>
    </section>
  );
}
