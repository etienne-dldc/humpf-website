import React, { useMemo, useCallback, useState } from "react";
import { CurveCanvas } from "../components/CurveCanvas";
import { Spring } from "humpf";
import { Slider } from "../components/Slider";

export const DampingRatioToOne: React.FC = () => {
  const [dampingRatio, setDampingRatio] = useState(0.2);

  const spring = useMemo(
    () =>
      Spring({
        position: 100,
        equilibrium: 0,
        angularFrequency: 1,
        dampingRatio: dampingRatio,
      }),
    [dampingRatio]
  );

  const position = useCallback((x) => spring(x).pos, [spring]);

  return (
    <div>
      <Slider
        title="Damping Ratio"
        value={dampingRatio}
        onChange={setDampingRatio}
        min={0.2}
        max={1}
        step={0.01}
        format={(v) => v.toFixed(2)}
      />
      <CurveCanvas
        position={position}
        duration={2000}
        restartOnChange={true}
        restartOnChangeDebounce={500}
        autoStart={false}
        previewTime={2000}
        yMin={120}
        yMax={-75}
        ratio={2 / 1}
      />
    </div>
  );
};
