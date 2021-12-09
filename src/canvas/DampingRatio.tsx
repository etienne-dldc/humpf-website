import { useMemo, useCallback, useState } from "react";
import { CurveCanvas } from "../components/CurveCanvas";
import { Spring } from "humpf";

export function DampingRatio(): JSX.Element {
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
      <div className="Buttons">
        <button
          className={"Button" + (dampingRatio === 0.2 ? " Button--active" : "")}
          onClick={() => setDampingRatio(0.2)}
        >
          Under damped
        </button>
        <div className="Buttons--space" />
        <button
          className={"Button" + (dampingRatio === 1 ? " Button--active" : "")}
          onClick={() => setDampingRatio(1)}
        >
          Critacally damped
        </button>
        <div className="Buttons--space" />
        <button
          className={"Button" + (dampingRatio === 3 ? " Button--active" : "")}
          onClick={() => setDampingRatio(3)}
        >
          Over damped
        </button>
      </div>
      <CurveCanvas
        position={position}
        duration={2000}
        restartOnChange={true}
        autoStart={false}
        previewTime={2000}
        yMin={120}
        yMax={-75}
        ratio={2 / 1}
      />
    </div>
  );
}
