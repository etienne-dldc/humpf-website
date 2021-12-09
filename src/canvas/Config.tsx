import React, { useMemo, useCallback, useState } from "react";
import { CurveCanvas } from "../components/CurveCanvas";
import { Spring } from "humpf";
import { CodeBlock } from "../components/CodeBlock";
import { Slider } from "../components/Slider";

export const Config: React.FC<{ showCode?: boolean }> = ({
  showCode = true,
}) => {
  const [angularFreq, setAngularFreq] = useState<number>(1);
  const [dampingRatio, setDampingRatio] = useState<number>(1);

  const spring = useMemo(
    () =>
      Spring({
        position: 0,
        equilibrium: 100,
        angularFrequency: angularFreq,
        dampingRatio,
      }),
    [angularFreq, dampingRatio]
  );

  const position = useCallback((x) => spring(x).pos, [spring]);

  return (
    <div>
      <Slider
        title="Angular Frenquency"
        value={angularFreq}
        onChange={setAngularFreq}
        min={0.2}
        max={2}
        step={0.05}
        format={(v) => v.toFixed(2)}
      />
      <Slider
        title="Damping Ratio"
        value={dampingRatio}
        onChange={setDampingRatio}
        min={0.2}
        max={5}
        step={0.05}
        format={(v) => v.toFixed(2)}
      />
      {showCode && (
        <CodeBlock
          code={`
          const spring = Spring({ angularFrequency: ${angularFreq}, dampingRatio: ${dampingRatio} });
        `}
        />
      )}
      <CurveCanvas
        position={position}
        duration={2000}
        restartOnChange={false}
        autoStart={false}
        previewTime={2000}
        yMin={0}
        yMax={120}
        ratio={2 / 1}
      />
    </div>
  );
};
