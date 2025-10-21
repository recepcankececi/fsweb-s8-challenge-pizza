export function TextInput({ label, value, onChange, placeholder }) {
  return (
    <label style={{ display: "flex", gap: "8px", marginTop: "1rem", alignItems: "center", fontFamily:"var(--font-barlow)", fontWeight:"600" }}>
      {label}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ padding: "6px", border: "1px solid #ccc", borderRadius: "4px" }}
      />
    </label>
  );
}

export function TextArea({ label, value, onChange, placeholder }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {label}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        style={{
          padding: "6px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          resize: "vertical",
        }}
      />
    </label>
  );
}
