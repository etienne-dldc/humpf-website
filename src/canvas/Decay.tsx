import React, { useMemo, useCallback, useState } from "react";
import { CurveCanvas } from "../components/CurveCanvas";
import { Spring, SpringConfig } from "humpf";
import { CodeBlock } from "../components/CodeBlock";

type Preset = "basic" | "gentle" | "wobbly" | "stiff" | "slow";

export const Decay: React.FC = () => {
  const [velocity, setVelocity] = useState<number>(50);

  const spring = useMemo(() => Spring(SpringConfig.decay({ velocity })), [
    velocity,
  ]);

  const position = useCallback((x) => spring(x).pos, [spring]);

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
      <CodeBlock
        code={`
          const spring = Spring(SpringConfig.decay({ velocity: ${velocity} }));
        `}
      />
      <CurveCanvas
        position={position}
        duration={2000}
        restartOnChange={false}
        autoStart={false}
        previewTime={2000}
        yMin={-10}
        yMax={100}
        ratio={2 / 1}
      />
    </div>
  );
};
