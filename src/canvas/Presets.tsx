import { useMemo, useCallback, useState } from "react";
import { CurveCanvas } from "../components/CurveCanvas";
import { Spring, SpringConfig } from "humpf";
import { CodeBlock } from "../components/CodeBlock";

const PRESETS = ["defaults", "basic", "gentle", "wobbly", "stiff", "slow"] as const;
type Preset = typeof PRESETS[number];

export function Presets(): JSX.Element {
  const [preset, setPreset] = useState<Preset>("basic");

  const spring = useMemo(() => Spring(SpringConfig[preset]()), [preset]);

  const position = useCallback((x: number) => spring.position(x), [spring]);

  return (
    <div>
      <div className="Buttons">
        {PRESETS.map((p) => (
          <button key={p} className={"Button" + (preset === p ? " Button--active" : "")} onClick={() => setPreset(p)}>
            {p}
          </button>
        ))}
      </div>
      <CodeBlock
        code={`
          const spring = Spring(SpringConfig.${preset}());
          // same as
          // const spring = Spring({ angularFrequency: ${SpringConfig[preset]().angularFrequency}, dampingRatio: ${
          SpringConfig[preset]().dampingRatio
        } });
        `}
      />
      <CurveCanvas
        position={position}
        duration={2000}
        restartOnChange={true}
        autoStart={false}
        previewTime={2000}
        yMin={0}
        yMax={1.2}
        ratio={2 / 1}
      />
    </div>
  );
}
