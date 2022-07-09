import { useCallback } from "react";
import { CurveCanvas } from "../components/CurveCanvas";

export const LinearCurve = () => {
  const position = useCallback((x: number) => x * (1 / 15), []);

  return (
    <CurveCanvas
      position={position}
      duration={1500}
      restartOnChange={false}
      autoStart={false}
      previewTime={1500}
      yMin={-10}
      yMax={110}
      ratio={2 / 1}
    />
  );
};
