export default function RadioGroup({ label, options, name, value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <span
        style={{
          fontFamily: "var(--font-barlow)",
          fontWeight: "600",
          fontSize: "1.4rem",
        }}
      >
        {label}
      </span>

      {options.map((opt) => (
        <label
          key={opt}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-barlow)",
            fontWeight: "500",
          }}
        >
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={(e) => onChange(e.target.value)}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
