export default function Success() {
  return (
    <section
      style={{
        backgroundColor: "var(--red)",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-barlow)",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontWeight: "700", fontSize: "2rem", marginBottom: "3rem" }}>
        Teknolojik Yemekler
      </h1>
      <h2 style={{ fontWeight: "400", fontSize: "3rem", lineHeight: "1.4" }}>
        TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!
      </h2>
    </section>
  );
}
