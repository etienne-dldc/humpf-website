import React, { useMemo, useCallback, useState } from "react";
import { CurveCanvas } from "../components/CurveCanvas";
import { Spring } from "humpf";
import { CodeBlock } from "../components/CodeBlock";

export const Config: React.FC = () => {
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

  console.log(position(0));
  console.log(position(1000));

  return (
    <div>
      <div className="Slider">
        <p className="Slider--name">Angular Frenquency: {angularFreq}</p>
        <input
          className="Range"
          type="range"
          min="0.2"
          max="2"
          step="0.1"
          value={angularFreq}
          onChange={(e) => setAngularFreq(parseFloat(e.target.value))}
        />
      </div>
      <div className="Slider">
        <p className="Slider--name">Damping Ratio: {dampingRatio}</p>
        <input
          className="Range"
          type="range"
          min="0.2"
          max="10"
          step="0.1"
          value={dampingRatio}
          onChange={(e) => setDampingRatio(parseFloat(e.target.value))}
        />
      </div>
      <CodeBlock
        code={`
          const spring = Spring({ angularFrequency: ${angularFreq}, dampingRatio: ${dampingRatio} });
        `}
      />
      <CurveCanvas
        position={position}
        duration={2000}
        restartOnChange={false}
        autoStart={false}
        previewTime={2000}
        yMin={0}
        yMax={100}
        ratio={2 / 1}
      />
    </div>
  );
};
