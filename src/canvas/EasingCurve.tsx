import { useCallback } from "react";
import { CurveCanvas } from "../components/CurveCanvas";

export const EasingCurve = () => {
  const duration = 1500;

  const easeInOutCubic = useCallback(
    (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
    []
  );

  const position = useCallback(
    (t: number) => easeInOutCubic(t / duration) * 100,
    [easeInOutCubic]
  );

  return (
    <CurveCanvas
      position={position}
      duration={duration}
      restartOnChange={false}
      autoStart={false}
      previewTime={duration}
      yMin={-10}
      yMax={110}
      ratio={2 / 1}
    />
  );
};
