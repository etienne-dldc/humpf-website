interface Props {
  value: number;
  onChange: (value: number) => void;
  title: string;
  min?: number;
  max?: number;
  step?: number;
  format?: (num: number) => string;
}

export function Slider({
  value,
  onChange,
  title,
  min = 0,
  max = 100,
  step = 1,
  format = (v) => v.toString(),
}: Props): JSX.Element {
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
}
