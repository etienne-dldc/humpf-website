import { useMemo, useCallback, useState } from "react";
import { CurveCanvas } from "../components/CurveCanvas";
import { Spring } from "humpf";
import { Slider } from "../components/Slider";

export function AngularFrequency(): JSX.Element {
  const [angularFrequency, setAngularFrequency] = useState(1);

  const spring = useMemo(
    () =>
      Spring({
        position: 100,
        equilibrium: 0,
        angularFrequency,
        dampingRatio: 0,
      }),
    [angularFrequency]
  );

  const position = useCallback((x: number) => spring(x).position, [spring]);

  return (
    <div>
      <Slider
        title="Angular Frequency"
        value={angularFrequency}
        onChange={setAngularFrequency}
        min={0.1}
        max={2}
        step={0.01}
        format={(v) => v.toFixed(1)}
      />
      <CurveCanvas
        position={position}
        duration={2000}
        restartOnChange={true}
        restartOnChangeDebounce={200}
        autoStart={true}
        previewTime={2000}
        yMin={120}
        yMax={-100}
        ratio={2 / 1}
        equilibrium={0}
      />
    </div>
  );
}
