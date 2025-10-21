export default function SelectDropdown({ label, options, value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && (
        <span
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: "600",
            fontSize: "1.4rem",
          }}
        >
          {label}
        </span>
      )}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "6px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "var(--font-barlow)",
          fontWeight: "500",
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
