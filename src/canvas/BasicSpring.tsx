import { useMemo, useCallback } from "react";
import { CurveCanvas } from "../components/CurveCanvas";
import { Spring } from "humpf";

interface Props {
  autoStart?: boolean;
  loop?: boolean;
}

export function BasicSpring({ autoStart = false, loop = false }: Props): JSX.Element {
  const spring = useMemo(
    () =>
      Spring({
        angularFrequency: 1,
        dampingRatio: 0.2,
      }),
    []
  );

  const position = useCallback((x: number) => spring.position(x), [spring]);

  return (
    <CurveCanvas
      position={position}
      duration={5000}
      restartOnChange={false}
      autoStart={autoStart}
      loop={loop}
      previewTime={3000}
      yMin={0}
      yMax={1.5}
      ratio={2 / 1}
    />
  );
}
