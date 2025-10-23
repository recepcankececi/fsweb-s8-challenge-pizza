export default function CheckboxGroup({ label, options, selected = [], onChange }) {
  function toggle(option) {
    // Maksimum 10 seçim kontrolü
    const alreadySelected = selected.includes(option);
    let updated = [];

    if (alreadySelected) {
      updated = selected.filter((t) => t !== option);
    } else if (selected.length < 10) {
      updated = [...selected, option];
    } else {
      updated = [...selected];
    }

    onChange(updated);
  }

  return (
    <div
      data-cy="checkbox-extras"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        marginTop: "1rem",
      }}
    >
      {label && (
        <span
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: "600",
            fontSize: "1.4rem",
            marginTop: "1rem",
          }}
        >
          {label}
        </span>
      )}

      <span
        style={{
          fontFamily: "var(--font-barlow)",
          fontWeight: "400",
          fontSize: "1rem",
        }}
      >
        En fazla 10 malzeme seçebilirsiniz. 5₺
      </span>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: "8rem",
          rowGap: "0.5rem",
          marginTop: "1.5rem",
        }}
      >
        {options.map((opt) => (
          <label
            key={opt}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-barlow)",
              fontWeight: "600",
              whiteSpace: "nowrap",
              opacity:
                !selected.includes(opt) && selected.length >= 10 ? 0.5 : 1,
              cursor:
                !selected.includes(opt) && selected.length >= 10
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            <input
              data-cy={`extra-${opt.replace(/\s+/g, "-")}`}
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => toggle(opt)}
              disabled={
                !selected.includes(opt) && selected.length >= 10
              }
              style={{ cursor: "pointer" }}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
