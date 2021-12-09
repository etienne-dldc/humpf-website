import { useMemo, useCallback, useState } from "react";
import { CurveCanvas } from "../components/CurveCanvas";
import { Spring, SpringConfig } from "humpf";
import { CodeBlock } from "../components/CodeBlock";

type Preset = "basic" | "gentle" | "wobbly" | "stiff" | "slow";

export function Presets(): JSX.Element {
  const [preset, setPreset] = useState<Preset>("basic");

  const spring = useMemo(() => Spring(SpringConfig[preset]()), [preset]);

  const position = useCallback((x) => spring(x).pos, [spring]);

  return (
    <div>
      <div className="Buttons">
        <button
          className={"Button" + (preset === "basic" ? " Button--active" : "")}
          onClick={() => setPreset("basic")}
        >
          basic
        </button>
        <div className="Buttons--space" />
        <button
          className={"Button" + (preset === "gentle" ? " Button--active" : "")}
          onClick={() => setPreset("gentle")}
        >
          gentle
        </button>
        <div className="Buttons--space" />
        <button
          className={"Button" + (preset === "wobbly" ? " Button--active" : "")}
          onClick={() => setPreset("wobbly")}
        >
          wobbly
        </button>
        <div className="Buttons--space" />
        <button
          className={"Button" + (preset === "stiff" ? " Button--active" : "")}
          onClick={() => setPreset("stiff")}
        >
          stiff
        </button>
        <div className="Buttons--space" />
        <button
          className={"Button" + (preset === "slow" ? " Button--active" : "")}
          onClick={() => setPreset("slow")}
        >
          slow
        </button>
      </div>
      <CodeBlock
        code={`
          const spring = Spring(SpringConfig.${preset}());
        `}
      />
      <CurveCanvas
        position={position}
        duration={2000}
        restartOnChange={true}
        autoStart={false}
        previewTime={2000}
        yMin={0}
        yMax={120}
        ratio={2 / 1}
      />
    </div>
  );
}
