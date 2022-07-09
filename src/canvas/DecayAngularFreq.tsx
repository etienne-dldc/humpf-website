import { useMemo, useCallback, useState } from "react";
import { CurveCanvas } from "../components/CurveCanvas";
import { Spring, SpringConfig } from "humpf";
import { CodeBlock } from "../components/CodeBlock";

export const DecayAngularFreq = () => {
  const [velocity, setVelocity] = useState<number>(50);
  const [angularFreq, setAngularFreq] = useState<number>(1);

  const spring = useMemo(
    () =>
      Spring(SpringConfig.decay({ velocity, angularFrequency: angularFreq })),
    [velocity, angularFreq]
  );

  const position = useCallback((x: number) => spring.position(x), [spring]);

  return (
    <div>
      <div className="Slider">
        <p className="Slider--name">Initial velocity: {velocity}</p>
        <input
          className="Range"
          type="range"
          min="0"
          max="100"
          step="1"
          value={velocity}
          onChange={(e) => setVelocity(parseFloat(e.target.value))}
        />
      </div>
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
      <CodeBlock
        code={`
          const spring = Spring(SpringConfig.decay({ velocity: ${velocity}${
          angularFreq === 1 ? "" : `, angularFrequency: ${angularFreq}`
        } }));
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
