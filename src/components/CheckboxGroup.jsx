export default function CheckboxGroup({ label, options, selected, onChange }) {
  function toggle(option) {
    if (selected.includes(option)) {
      onChange(selected.filter((t) => t !== option));
    } else {
      onChange([...selected, option]);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop:"1rem" }}>
      {label && <span style={{fontFamily:"var(--font-barlow)", fontWeight:"600", fontSize:"1.4rem", marginTop:"1rem"}}>{label}</span>}
      <span style={{fontFamily:"var(--font-barlow)", fontWeight:"400", fontSize:"1rem"}}>En fazla 10 malzeme seçebilirsiniz. 5₺</span>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", columnGap: "8rem", rowGap: "0.5rem", marginTop:"1.5rem" }}>
        {options.map((opt) => (
        <label key={opt} style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: "6px", 
        fontFamily:"var(--font-barlow)" , fontWeight:"600", whiteSpace: "nowrap"}}>
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => toggle(opt)}
            style={{ marginRight: "6px" }}
          />
          {opt}
        </label>
      ))}
      </div>
    </div>
  );
}
