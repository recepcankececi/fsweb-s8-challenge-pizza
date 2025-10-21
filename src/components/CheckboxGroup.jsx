export default function CheckboxGroup({ label, options, selected, onChange }) {
  function toggle(option) {
    if (selected.includes(option)) {
      onChange(selected.filter((t) => t !== option));
    } else {
      onChange([...selected, option]);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {label && <span>{label}</span>}
      {options.map((opt) => (
        <label key={opt}>
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
  );
}
