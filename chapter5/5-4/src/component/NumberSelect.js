import React from "react";

export default function NumberSelect({ value, options, label, onChange }) {
  return (
    <div>
      <select
        onChange={(e) => {
          const value = Number(e.currentTarget.value);
          onChange(value);
        }}
        value={value}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {label}
    </div>
  );
}
