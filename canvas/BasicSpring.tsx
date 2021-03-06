import React, { useMemo, useCallback } from "react";
import { CurveCanvas } from "../components/CurveCanvas";
import { Spring } from "humpf";

interface Props {
  autoStart?: boolean;
  loop?: boolean;
}

export const BasicSpring: React.FC<Props> = ({
  autoStart = false,
  loop = false,
}) => {
  const spring = useMemo(
    () =>
      Spring({
        angularFrequency: 1,
        dampingRatio: 0.2,
      }),
    []
  );

  const position = useCallback((x) => spring(x).pos, [spring]);

  return (
    <CurveCanvas
      position={position}
      duration={3000}
      restartOnChange={false}
      autoStart={autoStart}
      loop={loop}
      previewTime={3000}
      yMin={0}
      yMax={150}
      ratio={2 / 1}
    />
  );
};
