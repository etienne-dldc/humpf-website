import React from "react";

interface Props {
  value: number;
  onChange: (value: number) => void;
  title: string;
  min?: number;
  max?: number;
  step?: number;
  format?: (num: number) => string;
}

export const Slider: React.FC<Props> = ({
  value,
  onChange,
  title,
  min = 0,
  max = 100,
  step = 1,
  format = (v) => v.toString(),
}) => {
  return (
    <div className="Slider">
      <p className="Slider--name">
        {title}: <span className="Slider--value">{format(value)}</span>
      </p>
      <input
        className="Range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  );
};
