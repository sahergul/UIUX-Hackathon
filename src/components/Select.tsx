// components/Select.tsx
import React from "react";

type Option = {
  value: string;
  label: string;
};

type SelectDemoProps = {
  options: Option[];
  onSelect: (value: string) => void;
};

const SelectDemo = ({ options, onSelect }: SelectDemoProps) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectDemo;